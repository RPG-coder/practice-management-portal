const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lab_reports', {
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
    reportId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reportName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    worksheetFilepath: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    patientFilepath: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dueBy: {
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
    tableName: 'lab_reports',
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
      {
        name: "fk_lab_pm",
        using: "BTREE",
        fields: [
          { name: "patientId" },
          { name: "doctorId" },
        ]
      },
    ]
  });
};
