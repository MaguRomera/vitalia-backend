const app = require('./express/app');
const sequelize = require('./sequelize');
const PORT = 8080;

async function init() {
	// test database connection
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}

    // sync models (create tables if they don't exist)
    await sequelize.sync();

	console.log(`Starting Sequelize + Express example on port ${PORT}...`);

	// start express server
    app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}. Try some routes, such as '/api/users'.`);
	});
}

init();