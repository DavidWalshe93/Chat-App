// Created by David Walshe on 12/02/2020

const socket = io();

socket.on("message", (msg) => {
    console.log(msg)
});

// socket.on("countUpdated", (count) => {
//     console.log("The count has updated", count)
// });
//
//
// document.querySelector("#increment").addEventListener("click", () => {
//     console.log("Clicked");
//     socket.emit("increment");
// });