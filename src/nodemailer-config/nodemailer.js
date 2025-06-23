const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
})

transporter
  .verify()
  .then(() => console.log("Nodemailer: Conexión SMTP verificada correctamente."))
  .catch((error) => {
    console.error("Nodemailer: Error al verificar la conexión SMTP.");
    console.error("Detalles del error:", error);
    console.error("Stack trace:", error.stack);
  });

module.exports = transporter;