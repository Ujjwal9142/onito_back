const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
  },
  govId: {
    idType: { type: String },
    idValue: { type: String },
  },
  guardian: {
    guardianType: { type: String },
    name: { type: String },
  },
  email: {
    type: String,
  },
  emergencyContact: {
    type: String,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  pincode: {
    type: String,
  },
  occupation: {
    type: String,
  },
  religion: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  nationality: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
