var DataTypes = require("sequelize").DataTypes;
var _ar_internal_metadata = require("./ar_internal_metadata");
var _departments = require("./departments");
var _doctors = require("./doctors");
var _documents = require("./documents");
var _free_texts = require("./free_texts");
var _lab_reports = require("./lab_reports");
var _medications = require("./medications");
var _nurses = require("./nurses");
var _patient_reports = require("./patient_reports");
var _point_clicks = require("./point_clicks");
var _practice_managements = require("./practice_managements");
var _practice_managers = require("./practice_managers");
var _schema_migrations = require("./schema_migrations");
var _voiceovers = require("./voiceovers");

function initModels(sequelize) {
  var ar_internal_metadata = _ar_internal_metadata(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var doctors = _doctors(sequelize, DataTypes);
  var documents = _documents(sequelize, DataTypes);
  var free_texts = _free_texts(sequelize, DataTypes);
  var lab_reports = _lab_reports(sequelize, DataTypes);
  var medications = _medications(sequelize, DataTypes);
  var nurses = _nurses(sequelize, DataTypes);
  var patient_reports = _patient_reports(sequelize, DataTypes);
  var point_clicks = _point_clicks(sequelize, DataTypes);
  var practice_managements = _practice_managements(sequelize, DataTypes);
  var practice_managers = _practice_managers(sequelize, DataTypes);
  var schema_migrations = _schema_migrations(sequelize, DataTypes);
  var voiceovers = _voiceovers(sequelize, DataTypes);

  doctors.belongsTo(departments, { as: "department", foreignKey: "departmentId"});
  departments.hasMany(doctors, { as: "doctors", foreignKey: "departmentId"});
  free_texts.belongsTo(documents, { as: "document", foreignKey: "documentId"});
  documents.hasOne(free_texts, { as: "free_text", foreignKey: "documentId"});
  free_texts.belongsTo(documents, { as: "patient", foreignKey: "patientId"});
  documents.hasMany(free_texts, { as: "patient_free_texts", foreignKey: "patientId"});
  free_texts.belongsTo(documents, { as: "doctor", foreignKey: "doctorId"});
  documents.hasMany(free_texts, { as: "doctor_free_texts", foreignKey: "doctorId"});
  point_clicks.belongsTo(documents, { as: "document", foreignKey: "documentId"});
  documents.hasOne(point_clicks, { as: "point_click", foreignKey: "documentId"});
  point_clicks.belongsTo(documents, { as: "patient", foreignKey: "patientId"});
  documents.hasMany(point_clicks, { as: "patient_point_clicks", foreignKey: "patientId"});
  point_clicks.belongsTo(documents, { as: "doctor", foreignKey: "doctorId"});
  documents.hasMany(point_clicks, { as: "doctor_point_clicks", foreignKey: "doctorId"});
  voiceovers.belongsTo(documents, { as: "document", foreignKey: "documentId"});
  documents.hasOne(voiceovers, { as: "voiceover", foreignKey: "documentId"});
  voiceovers.belongsTo(documents, { as: "patient", foreignKey: "patientId"});
  documents.hasMany(voiceovers, { as: "patient_voiceovers", foreignKey: "patientId"});
  voiceovers.belongsTo(documents, { as: "doctor", foreignKey: "doctorId"});
  documents.hasMany(voiceovers, { as: "doctor_voiceovers", foreignKey: "doctorId"});
  documents.belongsTo(practice_managements, { as: "patient", foreignKey: "patientId"});
  practice_managements.hasMany(documents, { as: "documents", foreignKey: "patientId"});
  documents.belongsTo(practice_managements, { as: "doctor", foreignKey: "doctorId"});
  practice_managements.hasMany(documents, { as: "doctor_documents", foreignKey: "doctorId"});
  lab_reports.belongsTo(practice_managements, { as: "patient", foreignKey: "patientId"});
  practice_managements.hasMany(lab_reports, { as: "lab_reports", foreignKey: "patientId"});
  lab_reports.belongsTo(practice_managements, { as: "doctor", foreignKey: "doctorId"});
  practice_managements.hasMany(lab_reports, { as: "doctor_lab_reports", foreignKey: "doctorId"});
  medications.belongsTo(practice_managements, { as: "patient", foreignKey: "patientId"});
  practice_managements.hasMany(medications, { as: "medications", foreignKey: "patientId"});
  medications.belongsTo(practice_managements, { as: "doctor", foreignKey: "doctorId"});
  practice_managements.hasMany(medications, { as: "doctor_medications", foreignKey: "doctorId"});
  departments.belongsTo(practice_managers, { as: "manager", foreignKey: "managerId"});
  practice_managers.hasMany(departments, { as: "departments", foreignKey: "managerId"});

  return {
    ar_internal_metadata,
    departments,
    doctors,
    documents,
    free_texts,
    lab_reports,
    medications,
    nurses,
    patient_reports,
    point_clicks,
    practice_managements,
    practice_managers,
    schema_migrations,
    voiceovers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
