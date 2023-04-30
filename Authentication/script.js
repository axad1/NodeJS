const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/register", async (req, res) => {
  try {
    const { name, password } = req.body;
    const salt = await bcrypt.genSalt(); // 10
    const hashedPassword = await bcrypt.hash(password, salt);
    users.push({
      name,
      hashedPassword,
    });
    res.status(201).send("User created");
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (!user) {
    return res.status(400).send("User not found");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.hashedPassword)) {
      res.send("Success");
    } else {
      res.send("Not Allowed");
    }
  } catch (e) {
    res.status(500).send();
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
