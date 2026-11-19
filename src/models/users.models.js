const mongoose = require("mongoose");

const userSchema = new mongoose.schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    minlenght: 7,
  },
});

const UserModels = mongoose.model("User", userSchema);

module.exports = UserModels;
