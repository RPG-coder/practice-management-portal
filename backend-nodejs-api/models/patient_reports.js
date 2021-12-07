const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_reports', {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reportId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bodyMassIndex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bloodPressure_systolic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bloodPressure_diastolic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smokingStatus: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'patient_reports',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reportId" },
        ]
      },
    ]
  });
};
