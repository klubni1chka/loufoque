// test3.js
const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) =>  res.sendFile(__dirname+'/test3.html'))

module.exports = router;