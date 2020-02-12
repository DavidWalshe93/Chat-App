// Created by David Walshe on 12/02/2020

// Built-in module imports
const path = require("path");

// npm imports
const express = require("express");

// Setup express router
const router = new express.Router();

// Setup GET endpoint
router.get(["", "/chat", "/index"], async (req, res) => {
    try {
        res.render("index", {})
    } catch (e) {
        console.log(e)
    }
});


// File exports
module.exports = router;