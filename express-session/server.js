const app = require("./app");
const { PORT } = require("./configs");

// console.log(PORT)

app.listen(PORT, () => console.log("Server started listening on port ", PORT));
