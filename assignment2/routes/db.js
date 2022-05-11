import {connect} from "mongodb/src/cmap/connect";
import mongoose from "mongoose";

const db = "mongodb+srv://Assel:18AhYuNjzP4kpnVS@cluster0.sefax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose
    .connect(db)
    .then((res) => console.log("Connected to DB"))
    .catch((error) => console.log("Error"));
