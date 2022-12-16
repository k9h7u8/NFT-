const mongoose = require('mongoose');
require("dotenv").config();

// mongoDB connection
const mongoDBconnection = mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Mongo DB connected");
    })
    .catch((err) => {
        console.log(`DB connection error: ${err.message}`);
    });

module.exports = mongoDBconnection;