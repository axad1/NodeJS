const { Schema, model } = require("mongoose");

module.exports = model(
  "user",
  new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);
