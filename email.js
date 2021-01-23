var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
    
  auth: {
    user: 'jpnayakchintu@gmail.com',
    pass: 'Jyoti@666'
  }
});

var mailOptions = {
  from: 'jpnayakchintu@gmail.com',
  to: 'uic.19MCA8253@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});