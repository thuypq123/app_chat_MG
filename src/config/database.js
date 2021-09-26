const mongoose = require('mongoose');
//================================
const url1 = "mongodb+srv://socket_io:thuy1234@cluster0.uhkg4.mongodb.net/socket_io?retryWrites=true&w=majority";
const url = "mongodb+srv://socket_io:thuy1234@cluster0.uhkg4.mongodb.net/socket_io?retryWrites=true&w=majority"

//================================

async function connect(){
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Success Connected');
    } catch (error) {
        console.log("error");
    }
}
module.exports ={connect};
