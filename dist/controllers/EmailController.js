"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _nodemailer = require('nodemailer');
require('dotenv').config();

class EmailController {

     async sendEmail(){
        const transporter = _nodemailer.createTransport.call(void 0, {
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });
        console.log({
            user: process.env.EMAIL,
            pass: process.env.PASS
        });
        
        const mailOptions = {
            from: 'renanchaves27@gmail.com',
            to: 'renanchavess@gmail.com',
            subject: 'Project email sender test.',
            text: 'Test working!!!'
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err);
            }
            console.log(info);
        });
    }
}

exports. default = new EmailController();