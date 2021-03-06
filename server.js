let express = require("express");
let app = express();
let cookieParser = require("cookie-parser");
let reloadMagic = require("./reload-magic.js");
let SignUpFetch = require("./src/endpoints/signup");
let SignInFetch = require("./src/endpoints/signin");

reloadMagic(app);

app.use(cookieParser());
app.use("/", express.static("build"));
app.use("/", express.static("public"));
app.use(SignUpFetch);
app.use(SignInFetch);

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
