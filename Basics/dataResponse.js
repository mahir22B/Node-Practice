const http = require('http');

const data = [
    {
        id:1,
        name:"Mahir"
    },
    {
        id:2,
        name:"Kavisha"
    },
    {
        id:3,
        name:"Mummy"
    },
    {
        id:4,
        name:"Daddy"
    },
    {
        id:5,
        name:"Kavya"
    },

]

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.setHeader('Date',new Date(Date.now()))
    res.end(
        JSON.stringify({
            success:true,
            results:data.length,
            data: data
        })
    )
});

server.listen(4000, ()=>{
    console.log("Server is running");
})