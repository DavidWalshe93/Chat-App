// Created by David Walshe on 12/02/2020

// included app.js and setup Express in doing so.
const {app, server, io} = require("./app");

// Setup port, done via env variable.
const port = process.env.PORT;

// let count = 0;
//
// // Setup socket.io server
// io.on("connection", (socket) => {
//     console.log("New WebSocket Connection");
//
//     // Sends the count to user on connection
//     socket.emit("countUpdated", count);
//
//     // If user increments update for all users using io vs socket
//     socket.on("increment", () => {
//         count++;
//         io.emit("countUpdated", count);
//     })
// });

// Start Express application.
server.listen(port, () => {
    console.log("Server is up on port " + port)
});