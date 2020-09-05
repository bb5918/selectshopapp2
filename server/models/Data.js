const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
    },
    lat: {
      type: String,
    },
    lng: {
      type: Number,
    },
    area: {
      type: Number,
      default: 1,
    },
    styles: {
      type: Number,
      default: 1,
    },
    comment: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = { Data };
