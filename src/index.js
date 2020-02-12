// Created by David Walshe on 12/02/2020

// included app.js and setup Express in doing so.
const {app, server} = require("./app");

// Setup port, done via env variable.
const port = process.env.PORT;

// Start Express application.
server.listen(port, () => {
    console.log("Server is up on port " + port)
});