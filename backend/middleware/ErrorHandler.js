const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;

  let errorResponse = {
    success: false,
    message: err.message || "Internal Server Error",
  };

  if (err.status === 422 && err.errors) {
    let formattedErrors = {};
    err.errors.forEach((error) => {
      formattedErrors[error.path] = error.msg;
    });

    errorResponse.message = "Unprocessable Entity";
    errorResponse.errors = formattedErrors;
  }

  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
