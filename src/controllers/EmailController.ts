import { createTransport } from "nodemailer";
require('dotenv').config();

class EmailController {

    public async sendEmail(){
        const transporter = createTransport({
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

export default new EmailController();