//middleware is just a function that execute during the request-response cycle

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  //this is to format the default express error handling
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,   //will dont return stack track if mode is not production
  });
};

module.exports = {
  errorHandler,
};
