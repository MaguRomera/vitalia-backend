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
//endpoints doctor
app.get(`/doctores`, routes.doctores.getAll)
app.get(`/doctores/:id`, routes.doctores.getById)
//endpoints horario
app.get(`/horarios`, routes.horarios.getAll)
app.get(`/horarios/:id`, routes.horarios.getById)
//endpoints turno
app.get(`/turnos`, routes.turnos.getAll )
app.get(`/turnos/:id`, routes.turnos.getById)
app.post(`/turnos`, routes.turnos.create)
//endpoints paciente
app.get(`/pacientes`, routes.pacientes.getAll)
app.get(`/pacientes/:id`, routes.pacientes.getById)
app.post(`/pacientes`, routes.pacientes.validateCreatePaciente, routes.pacientes.create)

module.exports = app;