const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    departmentId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    departmentName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    managerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'practice_managers',
        key: 'managerId'
      }
    },
    totalDoctors: {
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
    tableName: 'departments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "departmentId" },
        ]
      },
      {
        name: "fk_dept_mgr",
        using: "BTREE",
        fields: [
          { name: "managerId" },
        ]
      },
    ]
  });
};
