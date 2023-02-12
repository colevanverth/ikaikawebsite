const nodemailer = require('nodemailer');

export default function handler(req, res) {
    const contactInfo = req.body; 
   console.log(contactInfo)
   const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
         user: "ikaikarecordsform@outlook.com",
         pass: "sfn22%AtI9vM"
      }
   })

   const options = {
      from: "ikaikarecordsform@outlook.com",
      to: "colevanverth@gmail.com",
      subject: `New ${contactInfo.type} Request`,
      text: 
         `
            Name: ${contactInfo.name}
            Email: ${contactInfo.email}
            Phone: ${contactInfo.phone ? contactInfo.phone : "None Provided"}
            Message: ${contactInfo.message}
         `
      
   }
   transporter.sendMail(options, function(err, info) {
      if (err) {
         console.log(err);
         return
      }
      console.log(info.response)
   })
   res.status(200).json(contactInfo);
}

