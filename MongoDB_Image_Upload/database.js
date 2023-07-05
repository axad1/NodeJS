const mongoose = require("mongoose");

const URI = "mongodb+srv://asad:123Shayan456@cluster0.ge0ziee.mongodb.net/test";

exports.connectDB = async () => await mongoose.connect(URI);

const imageSchema = mongoose.Schema({
  myFile: String
})

exports.ImageModel = mongoose.models.images || mongoose.model("image", imageSchema)