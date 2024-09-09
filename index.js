const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
main().then(() => {
    console.log("connection succesful")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//index route
app.get("/newChats" , (req,res)=>{
    let chat1 = new Chat({
      from: 'neha',
      to:"priya",
      msg:" send me exam sheets",
      created_at: new Date()
  });
  chat1.save().then((res) => {
      console.log(res);
  })
})

app.get("/" ,(req,res) => {
    res.send("root working")
})
app.listen(8080, ()=> {
    console.log("server is created")
})