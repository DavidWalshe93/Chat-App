// Created by David Walshe on 12/02/2020

// included app.js and setup Express in doing so.
const {app, server, io} = require("./app");

// Setup port, done via env variable.
const port = process.env.PORT;

// Setup socket.io server
io.on("connection", (socket) => {
    console.log("New Websocket Connection");

    // Sends the welcome message to user on connection.
    socket.emit("message", "Welcome");
    // Send notification to all users except this user that they have joined.
    socket.broadcast.emit("message", "A new user has joined");

    // If user sends a msg, send it to all users using "io" object vs "socket" object.
    socket.on("sendMessage", (msg) => {
        console.log("Sending msg:", msg);
        io.emit("message", msg);
    });

    // Broadcast message that a user has left the chat
    socket.on("disconnect", () => {
        io.emit("message", "A user has left");
    })
});

// Start Express application.
server.listen(port, () => {
    console.log("Server is up on port " + port)
});