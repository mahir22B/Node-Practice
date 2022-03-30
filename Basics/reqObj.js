const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    console.log(req);
    res.status(200).json({
        message:'All about req obj'
    })
})


app.listen(4000,()=>{
    console.log("Server has started");
})