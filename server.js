const express=require('express')
const app=express()

const PORT=process.env.PORT || 2233
app.get('/',(req,res)=>{
    res.send("Hello from backend")
})
app.listen(PORT,()=> console.log("server started at http://localhost:"+PORT))