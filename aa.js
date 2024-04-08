let express = require('express');

let app = express();


app.listen(8080,()=>{console.log("server sun rh ahai")});


app.get('/jitesh',(req,res)=>{
console.log("request recieved");
res.render("");
})