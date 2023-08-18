exports.authorize = async (req, res, next) => {
  const { v4: uuidv4 } = require("uuid");

  res.redirect(
    process.env.ALPACA_CONNECT_AUTHORISATION_URL +
      "?response_type=code&client_id=" +
      process.env.ALPACA_CONNECT_CLIENT +
      "&redirect_uri=" +
      process.env.ALPACA_CONNECT_REDIRECT_URL +
      "&state=" +
      uuidv4() +
      "&scope=account:write%20trading"
  );
};
