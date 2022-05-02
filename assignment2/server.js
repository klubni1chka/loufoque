// server.js
const express = require("express");
const app = express();
const port = 3000;

app.listen(port,() => console.info(`Listening on port ${port}`))
app.use(express.static( 'public'));
app.use(express.static('public'));