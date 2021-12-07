const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    documentId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
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
    tableName: 'documents',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "documentId" },
        ]
      },
      {
        name: "fk_doc_pm",
        using: "BTREE",
        fields: [
          { name: "patientId" },
          { name: "doctorId" },
        ]
      },
    ]
  });
};
