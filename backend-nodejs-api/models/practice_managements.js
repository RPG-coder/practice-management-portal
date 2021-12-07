const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('practice_managements', {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    visitCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'practice_managements',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "patientId" },
          { name: "doctorId" },
        ]
      },
    ]
  });
};
