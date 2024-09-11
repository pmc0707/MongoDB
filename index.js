const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended: true}));
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

//new route
app.get("/newChats/new",(req,res)=>{
    res.render("new.ejs")
})
//create route for add chat
app.post("/newChats",(req,res) =>{
    let { from , to ,msg} = req.body;
    let newChats2 = new Chat( {
        from: form,
        to: to,
        msg:msg,
        created_at: new Date()

    })
    console.log(newChats2)
    res.send("working")
})

app.get("/" ,(req,res) => {
    res.send("root working")
})
app.listen(8080, ()=> {
    console.log("server is created")
})