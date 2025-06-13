const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');

const { getById, getAll } = require('../express/routes/especialidades');

const routes = {
    especialidad: require('../express/routes/especialidades'),
    doctores: require('../express/routes/doctores'),
    horario: require('../express/routes/horarios'),
    paciente: require('../express/routes/pacientes'),
    turno: require('../express/routes/turnos'),
}

 
const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', "Access-Control-Allow-Origin"],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//endpoints especialidad
app.get(`/especialidad`, routes.especialidad.getAll)
app.get(`/especialidad/:id`, routes.especialidad.getById)
//endpoints doctor
app.get(`/especialidad/:id/doctores`, routes.doctores.getAll)
app.get(`/especialidad/:id/doctores/:id`, routes.doctores.getById)
//endpoints horario
app.get(`/especialidad/:id/doctores/:id/horario`, routes.horario.getAll)
app.get(`/especialidad/:id/doctores/:id/horario/:id`, routes.horario.getById)
//endpoints turno
app.get(`/turno`, routes.turno.getAll )
app.get(`/turno/:id`, routes.turno.getById)
app.post(`/turno`, routes.turno.create)
//endpoints paciente
app.get(`/turno/:id/paciente`, routes.paciente.getAll)
app.get(`/turno/:id/paciente/:id`, routes.paciente.getById)
app.post(`/turno/:id/paciente`, routes.paciente.create)

module.exports = app;