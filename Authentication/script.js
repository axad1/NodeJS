const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const SECRET = "secret";
const REFRESH_SECRET = "refresh";

const users = [];
const refreshTokens = [];

app.get("/users", authenticateToken, (req, res) => {
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
      const refreshToken = jwt.sign(user, REFRESH_SECRET);
      refreshTokens.push(refreshToken);
      const accessToken = jwt.sign({ name: user.name }, SECRET, {
        expiresIn: "30s",
      });

      res.json({ token: accessToken, refreshToken });
    } else {
      res.send("Not Allowed");
    }
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/token", (req, res) => {
  const token = req.body.token;
  if (!token) return res.sendStatus(401);

  if (!refreshTokens.includes(token)) return res.sendStatus(403);

  jwt.verify(token, REFRESH_SECRET, (err, user) => {
    console.log("user = ", user);
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ user: user.name }, SECRET, {
      expiresIn: "30s",
    });
    res.json(accessToken);
  });
});

// middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer token
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
