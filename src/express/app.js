const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors')

const app = express();
app.use(cors())

const routes = {
    especialidades: require('../express/routes/especialidades'),
    doctores: require('../express/routes/doctores'),
    horarios: require('../express/routes/horarios'),
    pacientes: require('../express/routes/pacientes'),
    turnos: require('../express/routes/turnos'),
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//endpoints especialidad
app.get(`/especialidades`, routes.especialidades.getAll)
app.get(`/especialidades/:id`, routes.especialidades.getById)
app.post(`/especialidades`, routes.especialidades.create)
app.delete(`/especialidades/:id`, routes.especialidades.remove)
app.put(`/especialidades/:id`, routes.especialidades.update)
//endpoints doctor
app.get(`/doctores`, routes.doctores.getAll)
app.get(`/doctores/:id`, routes.doctores.getById)
app.put(`/doctores/:id`, routes.doctores.update)
app.delete(`/doctores/:id`, routes.doctores.remove)
app.post(`/doctores/:id`, routes.doctores.create)
//endpoints horario
app.get(`/horarios/disponibles`, routes.horarios.getDisponibles)
app.get(`/horarios`, routes.horarios.getAll)
app.get(`/horarios/:id`, routes.horarios.getById)
app.put(`/horarios/:id`, routes.horarios.update)
app.delete(`/horarios/:id`, routes.horarios.remove)
app.post(`/horarios/:id`, routes.horarios.create)
//endpoints turno
app.get(`/turnos`, routes.turnos.getAll )
app.get(`/turnos/:id`, routes.turnos.getById)
app.post(`/turnos`, routes.turnos.create)
app.put(`/turnos/:id`, routes.turnos.update)
app.delete(`/turnos/:id`, routes.turnos.remove)
//endpoints paciente
app.get(`/pacientes`, routes.pacientes.getAll)
app.get(`/pacientes/:id`, routes.pacientes.getById)
app.post(`/pacientes`, routes.pacientes.validateCreatePaciente, routes.pacientes.create)
app.put(`/pacientes/:id`, routes.pacientes.update)
app.delete(`/pacientes/:id`, routes.pacientes.remove)

module.exports = app;