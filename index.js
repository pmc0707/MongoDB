const express = require("express");
const app = express();

app.get("/" ,(req,res) => {
    res.send("root working")
})
app.listen(8080, ()=> {
    console.log("server is created")
})