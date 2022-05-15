const express = require("express");
const router=express.Router();
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const bodyParser = require('body-parser');
// const methodOverride = require('method-override')
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(express.static('public'))
// app.use(methodOverride('_method'))
//mongodb+srv://Assel:18AhYuNjzP4kpnVS@cluster0.sefax.mongodb.net/notesDB?retryWrites=true&w=majority
mongoose.connect("mongodb://localhost:27017/node-demo",
     // {useNewUrlParser:true, useUnifiedTopology:true}
)
    .then(()=> {console.log("mongodb.connect")})
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// const dbConfig = require('./config/database.config.js');
// const {router} = require("express/lib/application");

app.use("/", require("./routes/root.js"));
app.use("/test1", require("./routes/test1.js"));
app.use("/test2", require("./routes/test2.js"));
app.use("/test3", require("./routes/test3.js"));
app.use("/test4", require("./routes/test4.js"));
app.use("/test5", require("./routes/test5.js"));
app.use("/test6", require("./routes/test6.js"));
app.use("/apiCall", require("./routes/apiCall.js"));

app.use("/regis", require("./routes/regis.js"));


app.use(express.static("./assignment2/routes/public/css/style.css"));


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
router.post('/save',(req,res)=>{
    console.log('Body:',req.body);
    res.json({
        msg:"We received ur data"
    });
});
app.post("/add-name",(req, res) => {
    let myData=new User(req.body);
    myData.save()
        .then(item=>{
            res.send("item saved to database");
        })
        .catch(err=>{
            res.status(400).send("unable to save to database")
        });

});
