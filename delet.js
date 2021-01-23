const fs=require("fs");
fs.unlink('b.txt',(err,filedat)=>{
	if(err)
	console.log("Error"+err);
	else
	 console.log("filedat");
});