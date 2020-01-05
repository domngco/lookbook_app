let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer({ dest: __dirname + "/uploads/" });
let authData = require("./authData");

let MongoClient = require("mongodb").MongoClient;
let dbo = undefined;
MongoClient.connect(authData.url, { useNewUrlParser: true }, (err, db) => {
  dbo = db.db(authData.dataBase);
});

let SignUpFetch = app.post("/sign-up", upload.none(), (req, res) => {
  let _username = req.body.username;
  let _email = req.body.email;
  let _password = req.body.password;
  let _sessionID = "" + Math.floor(Math.random() * 1000000);
  dbo
    .collection("users")
    .findOne(
      { $or: [{ email: _email }, { username: _username }] },
      (error, user) => {
        if (error) {
          res.send(JSON.stringify({ success: false }));
          return;
        }
        if (user !== null) {
          res.send(
            JSON.stringify({
              success: false,
              message: "Email or Username Taken"
            })
          );
          return;
        }
        dbo.collection("users").insertOne(
          {
            email: _email,
            username: _username,
            password: _password,
            dateJoined: Date(Date.now()).toString(),
            sessionID: _sessionID
          },
          (error, user) => {
            res.cookie("sid", _sessionID);
            res.send(
              JSON.stringify({
                success: true,
                message: "Thank You for Signing Up!",
                username: user.username
              })
            );
            return;
          }
        );
      }
    );
});

module.exports = SignUpFetch;
