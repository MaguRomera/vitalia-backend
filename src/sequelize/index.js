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
    ocupado: {
        type: DataTypes.BOOLEAN,
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
        type: DataTypes.STRING,
        allowNull: false
    },
    horarioturno: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paciente: {
        type: DataTypes.INTEGER,
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
paciente.belongsTo(turno);
especialidad.hasMany(doctor);
doctor.hasMany(horario);
turno.hasOne(horario, {
  foreignKey: {
    allowNull: true, // permite nulos
    name: 'turnoId'
  }
});

module.exports = sequelize;
