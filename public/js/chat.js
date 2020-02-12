// Created by David Walshe on 12/02/2020

const socket = io();

// Message receiver from server
socket.on("message", (msg) => {
    console.log(msg)
});

// Message transmitter
document.querySelector("#button-addon2").addEventListener("click", () => {

    // Get input field.
    const input = document.querySelector("#msg-input");
    // Send message to server with text.
    socket.emit("sendMessage", input.value);
    // Clear input field.
    input.value = ""
});