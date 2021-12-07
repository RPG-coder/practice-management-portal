const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctors', {
    doctorId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    totalPatients: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departments',
        key: 'departmentId'
      }
    },
    doctorDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'doctors',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctorId" },
        ]
      },
      {
        name: "fk_doctor_dept",
        using: "BTREE",
        fields: [
          { name: "departmentId" },
        ]
      },
    ]
  });
};
