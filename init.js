
const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main().then(() => {
    console.log("connection succesful")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allchats = [
  {
    from:"neha",
    to: "prity",
    message:"how are you"

  },
  {
    from:"me",
    to: "pestu",
    message:"are you fine"
  },
  {
    from:"neha",
    to: "prity",
    message:"what happend"
  }
]


Chat.insertMany(allchats);