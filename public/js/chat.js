// Created by David Walshe on 12/02/2020

const socket = io();

socket.on("countUpdated", (count) => {
    console.log("The count has updated", count)
});
