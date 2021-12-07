const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medications', {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'practice_managements',
        key: 'patientId'
      }
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'practice_managements',
        key: 'doctorId'
      }
    },
    medicationId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    medicationName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    medicationRoutine: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tillDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'medications',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "medicationId" },
        ]
      },
      {
        name: "fk_med_pm",
        using: "BTREE",
        fields: [
          { name: "patientId" },
          { name: "doctorId" },
        ]
      },
    ]
  });
};
