import { WebSocketClient, WebSocketServer } from "https://deno.land/x/websocket@v0.1.1/mod.ts";

const port = 8080;
const wss = new WebSocketServer(port);

wss.on("connection", function (ws: WebSocketClient) {
  console.log('connection')
  ws.on("message", function (message: string) {
    console.log(message);
    ws.send(message)
  });
});

console.log(`websocket server on: ${port}`)