const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db.sqlite',
	logQueryParameters: true,   
	benchmark: true
});

//modelos
sequelize.define('especialidad',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
  timestamps: false
});

sequelize.define('doctor',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matricula: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clinica: {
        type: DataTypes.STRING,
        allowNull: false
    },
    consultorio: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
  timestamps: false
});

sequelize.define('horario',{
    hora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
  timestamps: false
});

sequelize.define('turno',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
  timestamps: false
});

sequelize.define('paciente',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
  timestamps: false
});

//asociaciones
const {
    especialidad, 
    doctor, 
    horario, 
    turno, 
    paciente
} = sequelize.models;

doctor.belongsTo(especialidad);
horario.belongsTo(doctor);
turno.belongsTo(paciente);
paciente.hasMany(turno);
especialidad.hasMany(doctor);
turno.belongsTo(doctor);
doctor.hasMany(turno);
turno.belongsTo(horario, { foreignKey: { allowNull: true } });
horario.hasOne(turno, { foreignKey: { allowNull: true } });
module.exports = sequelize;
