const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const DAIRY ={}
const EMAILS = new Set();
 

app.post("/signup",(req,res)=>{
    console.log("insidesignup")
    const {name,email,password} = req.body;
        if(EMAILS.has(email)){
            return res.status(400).json({error: "EMail already exist"})
        }
        //token creation
        const token = `${Date.now()}`
        //entry in Dairy
        DAIRY[token] = {name, email,password}
        EMAILS.add(email);
        return res.json({status: 'success' ,token})
})

app.post("/me",(req,res)=>{
    const {token} = req.body;
    if(!DAIRY[token]){
        return res.json({error:"Token Missing"})
    }
    const entry = DAIRY[token];
    return res.json({status:"success", entry})
})


app.listen(port,()=>{
    console.log(`App running on ${port}`);
})