const env = process.env.NODE_ENV || "development";
const config = require("./config/config")[env];
const app = require("express")();
const mongoose = require("mongoose");
require("./config/express")(app);
require("./config/routes")(app);
mongoose.connect(
    "mongodb+srv://midnightmoet:Kingsland2021!@cubes.tyfr7.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Database is CONNECTED! YAY!");
});
app.listen(
    config.port,
    console.log(`Listening on port ${config.port}! Now its up to you...`)
);


//----------Just something from MongoDB --- //
// full driver code example
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://midnightmoet:<password>@cubes.tyfr7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });