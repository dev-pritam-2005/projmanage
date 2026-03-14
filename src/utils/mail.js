import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendEmail =async (options)=>{
    const mailGenerator =new Mailgen({
        theme : "default",
        product :{
            name :"task manager",
            link : "https://taskmanagelink.comx"
        }

    });

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
    const emailHtml = mailGenerator.generatePlaintext(options.mailgenContent);


    const transporter = nodemailer.createTransport({
        host : process.env.MAILTRAP_SMPT_HOST,
        port : process.env.MAILTRAP_SMTP_PORT,
        auth :{
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS,

        }
    })

    const mail ={
        from: "mail.taskmanager@examplr.com",
        to : options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml,
    }

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed siliently. Make sure that you have provided your MAILTRAP credentials in the .env file",
    );
    console.error("Error: ", error);
  }
    

}


const emailVerificationMailgenContent=(username,verificationUrl)=>{
    return {
        body:{
            name: username,
            intro :"hi welcome to our login page  ",
            action :{
                instruction: "to verify ur email plaese click the  button",
                button:{
                    Color:" #45057e",
                    text: "click here",
                    link: verificationUrl
                },
            },
                outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};
const forgotPasswordMailgenContent=(username,passwordUrl)=>{
    return {
        body:{
            name: username,
            intro :"hi welcome to our login page  ",
            action :{
                instruction: "to verify ur email plaese click the  button",
                button:{
                    Color:" #22BC66",
                    text: "click here",
                    link: passwordUrl
                },
            },
                outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

export{
    forgotPasswordMailgenContent,
    emailVerificationMailgenContent,
    sendEmail
}

