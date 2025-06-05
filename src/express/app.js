const express = require('express');
const bodyParser = require('body-parser');

const routes = {
    especialidades: require('/routes/especialidades'),
    doctores: require('/routes/doctores'),
    horarios: require('/routes/horarios'),
    pacientes: require('/routes/pacientes'),
    turnos: require('/routes/turnos'),
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//endpoints especialidad
app.get(`/especialidades`)
app.get(`/especialidades/:id`)
//endpoints doctor
app.get(`/especialidades/:id/doctores`)
app.get(`/especialidades/:id/doctores/:id`)
//endpoints horario
app.get(`/especialidades/:id/doctores/:id/horarios`)
app.get(`/especialidades/:id/doctores/:id/horarios/:id`)
//endpoints turno
app.get(`/turnos`)
app.get(`/turnos/:id`)
app.post(`/turnos`)
//endpoints paciente
app.get(`/turnos/:id/pacientes`)
app.get(`/turnos/:id/pacientes/:id`)
app.post(`/turnos/:id/pacientes`)
