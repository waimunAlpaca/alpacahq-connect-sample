exports.authorize = async (req, res, next) => {
  const { v4: uuidv4 } = require("uuid");

  let state = uuidv4();
  console.log("authorize state " + state);

  let url =
    process.env.ALPACA_CONNECT_AUTHORISATION_URL +
    "?response_type=code&client_id=" +
    process.env.ALPACA_CONNECT_CLIENT_ID +
    "&redirect_uri=" +
    process.env.ALPACA_CONNECT_REDIRECT_URL +
    "&state=" +
    state +
    "&scope=account:write%20trading";
  console.log("authorize url " + url);

  res.redirect(url);
};

exports.callback = async (req, res, next) => {
  let code = req.query.code;
  let state = req.query.state;
  console.log("callback code " + code);
  console.log("callback state " + state);

  res.json({
    message: "Received code + state. Verify state and store code in DB",
  });
};

// Note: this request should take place behind-the-scenes from your backend server and shouldn’t be visible to the end users for security purposes.
exports.token = async (req, res, next) => {
  console.log(
    "curl -X POST " +
      process.env.ALPACA_CONNECT_TOKEN_URL +
      " -d 'grant_type=authorization_code&code=" +
      req.body.code +
      "&client_id=" +
      process.env.ALPACA_CONNECT_CLIENT_ID +
      "&client_secret=" +
      process.env.ALPACA_CONNECT_CLIENT_SECRET +
      "&redirect_uri=" +
      process.env.ALPACA_CONNECT_REDIRECT_URL +
      "'"
  );
  res.json([]);
};
