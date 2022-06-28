const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = userSchema = mongoose.model("User", userSchema);
