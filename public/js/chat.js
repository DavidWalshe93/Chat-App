// Created by David Walshe on 12/02/2020

const socket = io();

// Message receiver from server
socket.on("message", (msg) => {
    console.log(msg)
});

// Message transmitter on button press
document.querySelector("#button-addon2").addEventListener("click", () => send());

// Message transmitter on enter key
document.querySelector("#msg-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("hello");
        send()
    }
});

const send = () => {
    // Get input field.
    const input = document.querySelector("#msg-input");
    // Send message to server with text.
    socket.emit("sendMessage", input.value);
    // Clear input field.
    input.value = "";
};