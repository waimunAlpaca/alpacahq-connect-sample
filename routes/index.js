var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Connect API",
    app: "Alpaca OAuth App",
    url: process.env.ALPACA_CONNECT_APP_URL + "oauth/authorize",
    redirect_uri: process.env.ALPACA_CONNECT_REDIRECT_URL,
  });
});

module.exports = router;
