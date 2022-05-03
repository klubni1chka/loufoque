// // Define schema
// import mongoose from "mongoose";
//
// const Schema = mongoose.Schema;
//
// const SomeModelSchema = new Schema({
//     a_string: String,
//     a_date: Date
// });
//
// // Compile model from schema
// const SomeModel = mongoose.model('SomeModel', SomeModelSchema);

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Assel:<password>@cluster0.sefax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close().then(() =>console.log() );
});
