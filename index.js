const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const app = require('express')();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
require('dotenv').config();
require('./config/express')(app);
require('./config/routes')(app);



mongoose.connect(
  "mongodb+srv://midnightmoet:Kingsland2021!@cubes.tyfr7.mongodb.net/Cubicle?retryWrites=true&w=majority", 
 {
    // dbName: "Cubicle",
    // user: "midnightmoet",
    // pass: "Kingsland2021!",
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  )
  //The respond w/ the call back (console.log)
    .then( (res) => console.log('Connected to my MongoDB Cloud!!'))
  
  //This catches & throws an error, if there is one
    .catch((err) => console.log(err));

  //We have a pending connection to the test database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:


const db = mongoose.connection;  //declare the db (database)

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("mongoose dataBase is CONNECTED!  YAY!");
});
//Once our connection opens, our callback will be called. For brevity, let's assume that all following code is within this callback.

app.listen(
    config.port,
    console.log(`Listening on port ${config.port}! Now its up to you...`)
);