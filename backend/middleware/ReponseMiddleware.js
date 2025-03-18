const responseMiddleware = (req, res, next) => {
  res.sendSuccess = (data, message = "Success", status = 200) => {
    return res.status(status).json({
      success: true,
      message,
      data,
    });
  };

  next();
};

module.exports = responseMiddleware;
