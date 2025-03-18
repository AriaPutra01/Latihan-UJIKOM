const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cors = require("cors");
const responseMiddleware = require("./middleware/ReponseMiddleware");
const routes = require("./routes");
const errorHandler = require("./middleware/ErrorHandler");

app.use("/uploads", express.static(path.join(__dirname, "public")));

var corsOption = {
  origin: ["http://localhost:5173"],
  optionsSuccessStatus: 200,
};

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;

app.use(responseMiddleware);
app.use("/v1", cors(corsOption), routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});
