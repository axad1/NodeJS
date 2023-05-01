const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    // origin: "*",
    origin: "http://localhost:5500",
    // origin: ["http://localhost:5501", "http://localhost:5500"],

    // to allow specific methods
    methods: ["GET", "POST"],

    // to allow cookies
    credentials: true,
  })
);

// catch all https request
app.all("/data", (req, res) => {
  res.json({ name: "Asad", favoriteFood: "Rice" });
});

app.listen(3000, () => console.log("3000 is running..."));
