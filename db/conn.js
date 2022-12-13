const mongoose=require("mongoose");
const url="mongodb+srv://Abhishek:foG2pCKaFlF0yShL@cluster0.76z2f9m.mongodb.net/TodoLists?retryWrites=true&w=majority"
mongoose.connect(url,{

}).then(()=>{
    console.log("mongodb connection success");
}).catch(()=>{
    console.log("mongodb connection fail");
})