const express = require("express");
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const url = require("./db").url;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
