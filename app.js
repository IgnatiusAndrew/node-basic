const express = require ('express');
const app = express();

app.get('/', (req, res)=>res.send("hello igi welcome to the new world of devops"));
app.listen(3000,()=>{
    console.log("igi");
})  