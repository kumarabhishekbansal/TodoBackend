const express=require("express");
const app=express();
require("./db/conn");
const bodyParser=require("body-parser");
const cors=require("cors");



// middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use("/",require("./routes/userRoute"));
app.use(cors());



app.get("/",(req,res)=>{
    res.send("home");
})

app.listen(4000,()=>{
    console.log("server is started at port no. 4000");
})


