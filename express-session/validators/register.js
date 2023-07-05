const v = new (require("fastest-validator"))();

const schema = {
  username: { type: string, min: 3, max: 20 },
  password: { type: string },
  name: { type: string, min: 3, max: 60 },
};
