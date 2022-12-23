require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { appDataSource } = require("./src/models/data.source");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/ping", function (req, res, next) {
  res.json({ message: "pong" });
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.log("Error during Data Source initialization", error);
  });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
