var fs=require('fs');
fs.appendFile('ch.txt','\n hlo jyoti',(err,data)=>{
  if(err)
    console.log(err);
  else
    console.log(data);
});