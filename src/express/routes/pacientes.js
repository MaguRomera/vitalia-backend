const {models} = require('../../sequelize')
const { body, validationResult } = require('express-validator');

async function getAll(req, res) {
	const pacientes = await models.paciente.findAll();
	res.status(200).json(pacientes);
};

async function getById(req, res) {
	const id = req.params.id;
	const paciente = await models.paciente.findByPk(id);
	if (paciente) {
		res.status(200).json(paciente);
	} else {
		res.status(404).send('404 - Not found');
	}
};

//validar los datos que pasa el usuario
const validateCreatePaciente = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('apellido').notEmpty().withMessage('El apellido es obligatorio'),
  body('dni').isInt({ min: 1 }).withMessage('El DNI debe ser un número válido'),
  body('email').isEmail().withMessage('Debe ingresar un email válido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    next();
  }
];

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.paciente.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = req.params.id;

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.paciente.update(req.body, {
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
	await models.paciente.destroy({
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
	validateCreatePaciente,
};