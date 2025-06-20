const { Sequelize } = require('sequelize');
const sequelize = require('../../sequelize');
const {models} = require('../../sequelize');
const { Op } = Sequelize;

async function getAll(req, res) {
	const horarios = await models.horario.findAll({});
	res.status(200).json(horarios);
};

//obtener los horarios q sean de x doctor y no estén en el 
// turno para la fecha
async function getDisponibles(req, res) {
  const { doctorId, fecha } = req.query;
  const whereHorario = {};
  if (doctorId) whereHorario.doctorId = doctorId;
  const whereTurno = {};
  if (fecha) {
  // Convierte el string de fecha 'YYYY-MM-DD' a Date, sino se rompe todo
    const startOfDay = new Date(fecha);
    const endOfDay = new Date(fecha);
    endOfDay.setDate(endOfDay.getDate() + 1);
    whereTurno.fecha = {
      [Op.gte]: startOfDay, 
      [Op.lt]: endOfDay     
    };
  }
  try {
    const horarios = await models.horario.findAll({
      where: whereHorario,
      include: [{
        model: models.turno,
        required: false,
        where: Object.keys(whereTurno).length > 0 ? whereTurno : undefined
      }]
    });
    const resultado = horarios.filter(h => !h.turno).map(h => ({
      id: h.id,
      hora: h.hora,
      doctorId: h.doctorId,
    }));
    res.status(200).json(resultado);
  } catch (error) {
    console.error("Error al obtener horarios:", error);
    res.status(500).json({ mensaje: "Error al obtener horarios" });
  }
}

async function getById(req, res) {
	const id = req.params.id;
	const horario = await models.horario.findByPk(id);
	if (horario) {
		res.status(200).json(horario);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.horario.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
  const id = req.params.id;
  try {
    await models.horario.update(req.body, {
      where: { id }
    });
    res.status(200).json({ mensaje: 'Horario actualizado' });
  } catch (err) {
    console.error('Error en el backend al actualizar horario', err);
    res.status(500).json({ mensaje: 'Error al actualizar el horario', error: err });
  }
}

async function remove(req, res) {
	const id = req.params.id;
	await models.horario.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
  getDisponibles
};