const mongoose = require("mongoose");
const chatScehema = new mongoose.Schema({
    from :{
        type: String,
        require: true
    },
    to :{
        type :String,
        require :true
    },
    msg :{
        type:String,
        maxLength : 50,
        require :true
    },
    created_at :{   
        type :Date,
        require :true
    }
})
const Chat = mongoose.model("chat",chatScehema);
module.exports = Chat;