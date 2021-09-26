const mongoose = require('mongoose');
//================================
const url1 = "mongodb+srv://socket_io:thuy1234@cluster0.uhkg4.mongodb.net/socket_io?retryWrites=true&w=majority";
const url = "mongodb+srv://socket_io:thuy1234@cluster0.uhkg4.mongodb.net/socket_io?retryWrites=true&w=majority"

//================================
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
//================================
async function connect(){
    try {
        await mongoose.connect(url, options);
        console.log('Success Connected');
    } catch (error) {
        console.log("error");
    }
}
module.exports ={connect};
