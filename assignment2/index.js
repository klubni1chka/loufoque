const express = require("express");
const app = express();
const port = 3000;

app.use("/", require("./routes/root.js"));
app.use("/test1", require("./routes/test1.js"));
app.use("/test2", require("./routes/test2.js"));
app.use("/test3", require("./routes/test3.js"));
app.use("/test4", require("./routes/test4.js"));
app.use("/test5", require("./routes/test5.js"));
app.use("/apiCall", require("./routes/apiCall.js"));
app.use(express.static("./assignment2/routes/public/css/style.css"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);