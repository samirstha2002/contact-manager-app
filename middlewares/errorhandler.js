const { constant } = require("./../constant");
const errorhandler = (err, req, res, next) => {
  let statusCode = res.statusCode ? res.statusCode : 500;

  if (err.code === 11000) {
    statusCode = 400;
    return res.status(statusCode).json({
      title: "Duplicate Field Error",
      message: `Duplicate value: ${JSON.stringify(err.keyValue)}`,
      stackTrace: err.stack,
    });
  }
  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constant.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constant.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constant.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constant.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("No error! All good");
      break;
  }
  next();
};
module.exports = errorhandler;
