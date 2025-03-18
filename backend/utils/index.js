const winston = require("winston");
const db = require("../models");

const loggers = winston.createLogger({
  level: "silly", // Set the highest level to capture all logs

  format: winston.format.combine(
    // Use combine for multiple formats
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss", // Customize timestamp format
    }),
    winston.format.json() // JSON format for log files
  ),

  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }), // Error logs only
    new winston.transports.File({ filename: "combined.log" }), // All logs (including silly)
  ],
});

if (process.env.NODE_ENV !== "production") {
  loggers.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Colorize console output
        winston.format.simple() // Simple format for console
      ),
    })
  );
}

loggers.silly("This is a silly log.");
loggers.debug("This is a debug log.");
loggers.verbose("This is a verbose log.");
loggers.info("This is an info log.");
loggers.warn("This is a warning log.");
loggers.error("This is an error log.");

const checkRole = (user, allowedRoles) =>
  allowedRoles.includes(user?.role?.name);

const handleTransaction = async (callback) => {
  const transaction = await db.sequelize.transaction();
  try {
    const result = await callback(transaction);
    await transaction.commit();
    return result;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports = { loggers, checkRole, handleTransaction };
