
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
    from:"shreya",
    to: "prity",
    msg:"how are you"

  },
  {
    from:"me",
    to: "pestu",
    msg:"are you fine"
  },
  {
    from:"neha",
    to: "prity",
    msg:"what happend"
  }
]


Chat.insertMany(allchats);