
var fs = require('fs');
var express=require('express'),app=express(),http=require('http').server(app).listen(80);
console.log("server started");
app.get("/",(req,res)=>{
 res.sendFile(__dirname+"/fu.html");
})

