const {models} = require('../../sequelize')

async function getAll(req, res) {
	const { especialidadId } = req.query;
	const where = {};
	if (especialidadId) {
		where.especialidadId = especialidadId;
	}
	const doctores = await models.doctor.findAll({where});
	res.status(200).json(doctores);
};

async function getById(req, res) {
	const id = req.params.id;
	const doctor = await models.doctor.findByPk(id);
	if (doctor) {
		res.status(200).json(doctor);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.doctor.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = req.params.id;

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.doctor.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = req.params.id;
	await models.doctor.destroy({
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
