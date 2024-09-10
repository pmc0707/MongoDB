const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
main()
    .then(() => {
      console.log("connection succesful")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//index route
app.get("/newChats",async (req,res) =>{
    let newChats = await Chat.find();
    console.log(newChats);
    res.render("index.ejs", {newChats})
})

app.get("/" ,(req,res) => {
    res.send("root working")
})
app.listen(8080, ()=> {
    console.log("server is created")
})