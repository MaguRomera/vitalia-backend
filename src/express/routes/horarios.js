const {models} = require('../../sequelize')

async function getAll(req, res) {
  const { doctorId, fecha } = req.query;

  const where = {};
  if (doctorId) {
    where.doctorId = doctorId;
  }

  try {
	const horarios = await models.horario.findAll({
	where,
	include: [{
		model: models.turno,
		as: 'turno',
		required: false,
		where: fecha ? { fecha } : undefined
	}]
	});

    // Marcar como ocupado solo si hay un turno asociado para esa fecha
    const resultado = horarios.map(h => ({
      id: h.id,
      hora: h.hora,
      doctorId: h.doctorId,
      ocupado: h.turno ? true : false
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
};