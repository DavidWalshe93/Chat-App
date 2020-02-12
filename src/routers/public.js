// Created by David Walshe on 12/02/2020

// Built-in module imports
const path = require("path");

// npm imports
const express = require("express");

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "..", "public");

// Setup express router
const router = new express.Router();

// Setup static resources for public router
router.use(express.static(publicDirectoryPath));

// Setup GET endpoint
router.get("/chat", async (req, res) => {
    res.render("index", {})
});


// File exports
module.exports = router;