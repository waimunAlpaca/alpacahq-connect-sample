var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    app: "Alpaca Connect",
    url: process.env.ALPACA_CONNECT_APP_URL + "oauth/authorize",
  });
});

module.exports = router;
