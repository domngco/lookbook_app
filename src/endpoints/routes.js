let express = require(express);
let signup = require("../routes/signup");
let router = express.Router();

router.use("/signup", signup);

module.exports = router;
