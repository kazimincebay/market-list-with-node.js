const express = require("express");
const PORT = 3000;

const app = express();
app.use(express.json());


let marketList = [
{id:1,name:"ekmek",quantity:3},
{id:2,name:"su",quantity:2}
];


app.get("/",(req,res)=>{
    res.send("Market List is Here")

})

app.post("/additem",(req,res)=>{

})







app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));
