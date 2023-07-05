const express = require("express");
const app = express();
const { router } = require("./routes");

app.use(express.json({limit: "2mb"}))
// app.use(express.text())
// app.use(express.urlencoded({extended: false}))
app.use("/birds", router);

app.listen(4000, () => console.log("Server running at 4000"));
