// test1.js
const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+'/test1.html'))

module.exports = router;
