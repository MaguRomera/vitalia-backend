const {models} = require('../../sequelize')

async function getAll(req, res) {
	const especialidad = await models.especialidad.findAll();
	res.status(200).json(especialidad);
};

async function getById(req, res) {
	const id = req.params.id;
	const especialidad = await models.especialidad.findByPk(id);
	if (especialidad) {
		res.status(200).json(especialidad);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.especialidad.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = req.params.id;

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.especialidad.update(req.body, {
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
	await models.especialidad.destroy({
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