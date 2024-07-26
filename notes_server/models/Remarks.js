const mongoose = require("mongoose");

const Remarks = new mongoose.Schema(
  {
    Remark: {
      type: String,
      minlength: 2,
      maxlength: 20,
      required: true,
    },
    postedBy: {
      type: String,
      minlength: 2,
      maxlength: 50,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("remarks", Remarks);

