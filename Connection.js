const mongoose = require('mongoose');

const URI = "mongodb+srv://General-User:Userpassword@database.hcoym.mongodb.net/WoWMountsResit?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true, 
        useNewUrlParser: true });
    console.log("DB Connected!")
};

module.exports = connectDB;