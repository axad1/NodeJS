const { Router } = require("express");
const { connectDB, ImageModel } = require("./database");
const router = Router();

router.post("/", async (req, res) => {
  const db = await connectDB()
  const newImage = await ImageModel.create({myFile: req.body.file});
  await db.disconnect()
  res.end("Success");
});

router.get("/", async (req, res) => {
  const db = await connectDB()
  const images = await ImageModel.find();
  await db.disconnect()
  res.send(images);
});

exports.router = router;
