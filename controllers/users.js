const User = require("../models/users");

exports.registerUser = async (req, res, next) => {
  const {
    name,
    age,
    sex,
    mobile,
    govIdType,
    govIdValue,
    guardianType,
    guardian,
    emergencyContact,
    email,
    address,
    state,
    city,
    country,
    pincode,
    occupation,
    religion,
    maritalStatus,
    bloodGroup,
    nationality,
  } = req.body;
  try {
    const newUser = new User({
      name,
      age,
      sex,
      mobile,
      govId: {
        idType: govIdType,
        idValue: govIdValue,
      },
      guardian: {
        guardianType: guardianType,
        name: guardian,
      },
      email,
      emergencyContact,
      address,
      state,
      city,
      country,
      pincode,
      occupation,
      religion,
      maritalStatus,
      bloodGroup,
      nationality,
    });

    const response = await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully.", user: response });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users: users });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
