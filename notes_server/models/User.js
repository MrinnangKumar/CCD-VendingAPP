const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    //? Here we have to pass all the data about the name like what showuld be type of name, min/max number of character
    name: {
      type: String,
      min: 5,
      max: 30,
    },
    email: {
      type: String,
      min: 5,
      max: 30,
      unique: true,
      required: true, //* This means its mandatory
    },
    password: {
      type: String,
      min: 1,
      max: 16,
      required: true,
    },

    //! ---------------------------GPT CODE ----------------------------------------------------------------------------------
  //   ID: {
  //     type: Number,
  //     min: 5,
  //     max: 30,
  //     unique: true,
  //     required: true,
  //   },
  //   Machine_No: {
  //     type: Number,
  //     min: 5,
  //     max: 30,
  //     unique: true,
  //     required: true, //* This means its mandatory
  //   },
  //   customer_Name: {
  //     type: String,
  //     min: 8,
  //     max: 16,
  //     required: true,
  //   },
  //   Remark:{
  //     type: String,
  //     min: 8,
  //     max: 16,
  //   }
  },
  { timestamps: true }
);

//! Now if we wnat to export this schema
module.exports = mongoose.model("users", User);
