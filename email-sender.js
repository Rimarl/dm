var nodemailer = require("nodemailer");

var transporter = nodemailer.createTestAccount({ 

service : 'gmail ' ,
 auth : { 
    user : " latamenerima1@gmail.com" , 
    password : ''

 }

}) ; 

var mailOptions = { 

    from : " latamenerima1@gmail.com " , 
     to : " latamenerima1@gmail.com ",
     subject : " sending mail using Nodejs " , 
     text : " That was easy "

};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });