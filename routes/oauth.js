var express = require("express");
var router = express.Router();

const oauth = require("../controllers/oauth");

router.get("/authorize", oauth.authorize);
router.get("/callback", oauth.callback);

module.exports = router;
