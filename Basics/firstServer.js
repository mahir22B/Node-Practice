const http = require('http');

const createServer = http.createServer((req,res)=>{
    res.end("First Server Created")
})

createServer.listen(4000, () =>{
    console.log("Server is Running");
})