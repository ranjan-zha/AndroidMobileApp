const mongoose 	= require('mongoose');
const Users 	= require('../models/users.js');
const bcrypt    = require('bcryptjs');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var otpGenerator = require('otp-generator')

exports.signup = (req,res,next)=>{
    console.log("req.body = ", req.body);

    Users.find({"profile.email" : req.body.email})
        .then(response =>{
            if(response.length > 0){
                res.status(200).json({
                    message : "User with this email is already registered!"
                });
            }else{

                bcrypt.hash(req.body.password, 10, function(err,hash){
                    console.log("hash = ",hash);
                    const user = new Users({
                        "_id"         : new mongoose.Types.ObjectId(),
                        profile       : {
                            "firstName"   : req.body.firstname,
                            "lastName"    : req.body.lastname,
                            "email"       : req.body.email,
                            "phone"       : req.body.phone,
                        },
                        "services.password.bcrypt" : hash,
                    });
            
                    user.save()
                        .then(user => {
                            console.log("user = ", user);
                            res.status(200).json({
                                "user" : user
                            });
                        })
                        .catch( (err) => {
                            console.log("error while storing signup data ", err);
                            res.status(500).json({
                                error : err,
                                message : "error while storing signup data"
                            })
                        })
            
                });                


            }
        })


}



exports.login = (req,res,next) => {

    
    
    console.log("login body = ", req.body);

    Users.findOne({"profile.email" : req.body.email})
        .then(response => {
            console.log("Response login = ", response);
            if(response){
                var storedPwd = response.services.password.bcrypt; 

                bcrypt.compare(req.body.password, storedPwd, function(err,rslt){
                    if(rslt){
                        var token = jwt.sign({
                                        email: req.body.email,
                                        user_id : response._id,
                                        password : req.body.password
                                    }, 
                                    'secret',
                                    {
                                        expiresIn : "7d"
                                    });
                        
                        console.log("token = ",token);

                        Users.update(
                            {_id : response._id},
                            {
                                $push : {"loginTokens" :{
                                    timestamp : new Date(),
                                    token : token
                                }}
                            }
                        )
                        .then(response => {
                            res.status(200).json({
                                message : "Successfully Logged In",
                                token : token
                            })
                        })
                        .catch( (err) => {
                            console.log("error while generating Token", err);
                            res.status(500).json({
                                error : err,
                                message : "error while generating Token"
                            })
                        })


                    }else{
                        res.status(200).json({
                            message : "Password Not Matching!"
                        })
                    }
                });

            }else{
                res.status(200).json({
                    message : "Please register before Login"
                })
            }
        })
        .catch( (err) => {
            console.log("error while Login ", err);
            res.status(500).json({
                error : err,
                message : "error while Login"
            })
        })
}
exports.forgotpassword = (req,res,next) => {
    console.log("login body = ", req.body);

    Users.findOne({"profile.email" : req.body.email})
        .then(response => {
            console.log("Response login = ", response);
            if(response){

                var otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
                console.log("OTP is  => ", otp);
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'rnjnzha@gmail.com',
                      pass: 'Ranjan@17'
                    }
                  });
                  
                  var mailOptions = {
                    from: 'rnjnzha@gmail.com',
                    to: 'kumar30895@gmail.com',
                    subject: 'OTP Verification',
                    html: 'We got your request to password reset, Please verify OTP with us.Your OTP is '+ otp +'.'
                  };
                  
                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
                

            }else{
                res.status(200).json({
                    message : "Please register before Login"
                })
            }
        })
        .catch( (err) => {
            console.log("error while Login ", err);
            res.status(500).json({
                error : err,
                message : "error while Login"
            })
        })
}
