// Created by David Walshe on 12/02/2020

const app = require("./app");

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is up on port " + port)
});