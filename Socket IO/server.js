const io = require("socket.io")(5000, {
  cors: {
    origin: "*",
  },
//   allowRequest: (req, callback) => {
//     const noOriginHeader = req.headers.origin === undefined;
//     console.log("no origin = ", noOriginHeader)
//     callback(null, noOriginHeader);
//   },
});

const users = {}

io.on("connection", (socket) => {
    socket.on("new-user", (name)=>{
        users[socket.id] = name;
        socket.broadcast.emit("new-user", name)
    })
  socket.on("send-message", msg => {
    io.emit("new-msg", {msg, name: users[socket.id]});
  })

});
