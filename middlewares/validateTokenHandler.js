const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  let authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("Token is not valid or expired");
      }

      req.user = decoded.user; // attach the user data to req
      next(); // move to the next route
    });
  } else {
    res.status(401);
    throw new Error("No token provided");
  }
});

module.exports = validateToken;
