var nodemailer = require('nodemailer');



module.exports = function (app) {
    app.post("/api/email", function (req, res) {
        var message = "Name: " + req.body.name + " Email: " + req.body.email + " Content: " + req.body.content
        var subject = req.body.subject
        console.log(message);
        console.log(subject)
        var transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
              user: 'ncortes68@yahoo.com',
              pass: 'Puppylala1'
            }
          });

          var mailOptions = {
            from: 'ncortes68@yahoo.com',
            to: 'ncortes1415@gmail.com',
            subject: subject,
            text: message
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

    })
}