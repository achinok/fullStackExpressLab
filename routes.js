"use strict"

const express = require("express");
const shopRoutes = express.Router();
const items = require("./public/cartConnect");

shopRoutes.get("/cartConnect", (reg, res) => {
    console.log("its working");
    console.log(req.body);
});

module.export = shopRoutes;
