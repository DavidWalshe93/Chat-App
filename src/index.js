// Created by David Walshe on 12/02/2020

// included app.js and setup Express in doing so.
const app = require("./app");

// Setup port, done via env variable.
const port = process.env.PORT;

// Start Express application.
app.listen(port, () => {
    console.log("Server is up on port " + port)
});