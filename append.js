const fs=require("fs");
fs.appendFile('b.txt','\n hlo i am',(err,filedat)=>{
	if(err)
	console.log("Error"+err);
	else
	 console.log("filedat");
});