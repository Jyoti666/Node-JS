var nm=require('nodemailer');
var transporter=nm.createTransport({
 service:'gmail',
 auth:{
  user:'jpnayakchintu@gmail.com',
  pass:'Jyoti@666'
 }
});
var mo={
 from: 'jpnayakchintu@gmail.com',
 to: 'uic.19MCA8253@gmail.com',
 subject:'hlo chintu',
text: 'That was easy!'
};
transporter.sendMail(mo,(err,info)=>{
 if(err)
   console.log(err);
 else
   console.log("send");
});