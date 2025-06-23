const { Router } = require("express");
const transporter = require("../../nodemailer-config/nodemailer");

const nodemailer = Router();

nodemailer.post("/", async (req, res) => {
  const { email, name, doctor, especialidad, fecha, hora } = req.body;

  try {
    const doctorNombre = doctor && typeof doctor === 'object' ? doctor.nombre : doctor;
    const especialidadNombre = especialidad && typeof especialidad === 'object' ? especialidad.nombre : especialidad;
    const horaTexto = hora && typeof hora === 'object' ? hora.hora : hora;
    let fechaFormateada = 'No especificada'; 

    if (fecha) {
        const dateObj = new Date(fecha);
        if (!isNaN(dateObj.getTime())) { // Verifica si la fecha es válida
            fechaFormateada = dateObj.toLocaleDateString('es-AR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
        } else if (typeof fecha === 'string') {
            fechaFormateada = fecha;
        } else if (typeof fecha === 'object' && typeof fecha.format === 'function') {
            fechaFormateada = fecha.format('DD/MM/YYYY');
        }
    }

    await transporter.sendMail({
      from: "VITALIA",
      to: email,
      subject: "Confirmación de Turno en VITALIA",
      html: `
        <body>
            <h2>¡Su turno ha sido registrado!</h2>
            <h3>Aquí se detallará la información del turno, Sr./Sra. ${name}</h3>
            <p>
                Doctor: <strong>${doctorNombre || 'No especificado'}</strong> <br>
                Especialidad: <strong>${especialidadNombre || 'No especificada'}</strong> <br>
                Fecha: <strong>${fechaFormateada || 'No especificada'}</strong> <br>
                Hora: <strong>${horaTexto || 'No especificada'}</strong> <br>
            </p>
            <p>Gracias por confiar en VITALIA.</p>
        </body>`,
    });

    console.log(`Correo enviado a ${email} para el turno de ${name}.`);
    res.status(200).json({ message: "Email enviado con éxito." });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "Error al enviar el correo.", error: error.message });
  }
});

module.exports = nodemailer;