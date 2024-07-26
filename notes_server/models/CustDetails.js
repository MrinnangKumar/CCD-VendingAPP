const mongoose = require("mongoose");

const CustDetails = new mongoose.Schema(
  {
    empid: {
      type: String,
      minlength: 2,
      maxlength: 30,
      unique: true,
      required: true,
    },
    Machine_No: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    Customer_Name: {
      type: String,
      minlength: 2,
      maxlength: 20,
      required: true,
    },
    // Remark: {
    //   type: String,
    //   minlength: 2,
    //   maxlength: 20,
    //   required: true,
    // },
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

module.exports = mongoose.model("details", CustDetails);
