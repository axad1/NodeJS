import express from "express";
import { WebSocketServer } from "ws";

const app = express();

const server = app.listen(3000, () =>
  console.log("Server is listening on port 3000")
);

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
	for(let k in ws){
		console.log(k, "--> ", ws[k]);
	}
  ws.on("message", (data) => {
    console.log("data from client %s", data);
    ws.send("hello world");
  });
});
