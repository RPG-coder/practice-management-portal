const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('voiceovers', {
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
    audioLink: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transcript: {
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
    tableName: 'voiceovers',
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
        name: "fk_voice_doc",
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
