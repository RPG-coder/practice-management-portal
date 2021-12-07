const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('free_texts', {
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
    textNotes: {
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
    tableName: 'free_texts',
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
        name: "fk_text_doc",
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
