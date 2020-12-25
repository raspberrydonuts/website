const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  name: {
      type: String
  },
  count: {
      type: Number
  }
});

module.exports = mongoose.model("detail", detail);