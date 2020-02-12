// Created by David Walshe on 12/02/2020

// Built-in module imports
const path = require("path");
// npm Imports
const express = require("express");
const hbs = require("hbs");

// local imports
const publicRouter = require("./routers/public");

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "..", "public");
const viewsPath = path.join(__dirname, "..", "templates", "views");
const partialsPath = path.join(__dirname, "..", "templates", "partials");

// Create express instance
const app = express();

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static resources for app
app.use(express.static(publicDirectoryPath));

// Register Routers
app.use(express.json());
app.use(publicRouter);

// Setup handlebars engine and views location
app.set("view engine", "hbs");

module.exports = app;
