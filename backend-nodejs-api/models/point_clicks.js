const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('point_clicks', {
    documentId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'documents',
        key: 'documentId'
      }
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documents',
        key: 'patientId'
      }
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documents',
        key: 'doctorId'
      }
    },
    formData: {
      type: DataTypes.JSON,
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
    tableName: 'point_clicks',
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
        name: "fk_pc_doc",
        using: "BTREE",
        fields: [
          { name: "patientId" },
          { name: "doctorId" },
          { name: "documentId" },
        ]
      },
    ]
  });
};
