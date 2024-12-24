const express = require('express');
const app = new express();
const ejs = require('ejs');

app.set('view engine','ejs');
app.set("views",__dirname+'/views');
app.use(express.static('public'));


const routes= require('./routes/router');
app.use("/",routes);

app.listen(4000,()=>{
    console.log("server is listening on port 4000");
});