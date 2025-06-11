const express = require('express');
const bodyParser = require('body-parser');
const { getById, getAll } = require('../express/routes/especialidades');

const routes = {
    especialidades: require('../express/routes/especialidades'),
    doctores: require('../express/routes/doctores'),
    horarios: require('../express/routes/horarios'),
    pacientes: require('../express/routes/pacientes'),
    turnos: require('../express/routes/turnos'),
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//endpoints especialidad
app.get(`/especialidades`, routes.especialidades.getAll)
app.get(`/especialidades/:id`, routes.especialidades.getById)
//endpoints doctor
app.get(`/especialidades/:id/doctores`, routes.doctores.getAll)
app.get(`/especialidades/:id/doctores/:id`, routes.doctores.getById)
//endpoints horario
app.get(`/especialidades/:id/doctores/:id/horarios`, routes.horarios.getAll)
app.get(`/especialidades/:id/doctores/:id/horarios/:id`, routes.horarios.getById)
//endpoints turno
app.get(`/turnos`, routes.turnos.getAll )
app.get(`/turnos/:id`, routes.turnos.getById)
app.post(`/turnos`, routes.turnos.create)
//endpoints paciente
app.get(`/turnos/:id/pacientes`, routes.pacientes.getAll)
app.get(`/turnos/:id/pacientes/:id`, routes.pacientes.getById)
app.post(`/turnos/:id/pacientes`, routes.pacientes.create)

module.exports = app;