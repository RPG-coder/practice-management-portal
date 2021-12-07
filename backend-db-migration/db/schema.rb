# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_20_164726) do

  create_table "departments", primary_key: "departmentId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "departmentName"
    t.integer "managerId"
    t.integer "totalDoctors", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["managerId"], name: "fk_dept_mgr"
  end

  create_table "doctors", primary_key: "doctorId", id: :string, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "totalPatients", default: 0
    t.integer "departmentId"
    t.text "doctorDescription"
    t.integer "yearsOfExperience", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["departmentId"], name: "fk_doctor_dept"
  end

  create_table "documents", primary_key: "documentId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "patientId"
    t.integer "doctorId"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patientId", "doctorId"], name: "fk_doc_pm"
  end

  create_table "free_texts", primary_key: "documentId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "patientId"
    t.integer "doctorId"
    t.text "textNotes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patientId", "doctorId", "documentId"], name: "fk_text_doc"
  end

  create_table "lab_reports", primary_key: "reportId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "patientId"
    t.integer "doctorId"
    t.string "reportName"
    t.string "worksheetFilepath"
    t.string "patientFilepath"
    t.timestamp "dueBy"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patientId", "doctorId"], name: "fk_lab_pm"
  end

  create_table "medications", primary_key: "medicationId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "patientId"
    t.integer "doctorId"
    t.string "medicationName"
    t.string "medicationRoutine"
    t.timestamp "tillDate"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patientId", "doctorId"], name: "fk_med_pm"
  end

  create_table "nurses", primary_key: "nurseId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "nurseFirstName"
    t.string "nurseMiddleName"
    t.string "nurseLastName"
    t.integer "age"
    t.string "address"
    t.string "contactNo"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "patient_reports", primary_key: "reportId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "patientId"
    t.integer "height"
    t.integer "weight"
    t.integer "bodyMassIndex"
    t.integer "bloodPressure_systolic"
    t.integer "bloodPressure_diastolic"
    t.boolean "smokingStatus"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "point_clicks", primary_key: "documentId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "patientId"
    t.integer "doctorId"
    t.json "formData"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patientId", "doctorId", "documentId"], name: "fk_pc_doc"
  end

  create_table "practice_managements", primary_key: ["patientId", "doctorId"], charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "patientId", null: false
    t.integer "doctorId", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "practice_managers", primary_key: "managerId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "managerFirstName"
    t.string "managerMiddleName"
    t.string "managerLastName"
    t.integer "age"
    t.string "address"
    t.string "contactNo"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "voiceovers", primary_key: "documentId", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "patientId"
    t.integer "doctorId"
    t.string "audioLink"
    t.text "transcript"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patientId", "doctorId", "documentId"], name: "fk_voice_doc"
  end

  add_foreign_key "departments", "practice_managers", column: "managerId", primary_key: "managerId", name: "fk_dept_mgr"
  add_foreign_key "doctors", "departments", column: "departmentId", primary_key: "departmentId", name: "fk_doctor_dept"
  add_foreign_key "documents", "practice_managements", column: "doctorId", primary_key: "doctorId", name: "fk_doc_pm"
  add_foreign_key "documents", "practice_managements", column: "patientId", primary_key: "patientId", name: "fk_doc_pm"
  add_foreign_key "free_texts", "documents", column: "doctorId", primary_key: "doctorId", name: "fk_text_doc"
  add_foreign_key "free_texts", "documents", column: "documentId", primary_key: "documentId", name: "fk_text_doc"
  add_foreign_key "free_texts", "documents", column: "patientId", primary_key: "patientId", name: "fk_text_doc"
  add_foreign_key "lab_reports", "practice_managements", column: "doctorId", primary_key: "doctorId", name: "fk_lab_pm"
  add_foreign_key "lab_reports", "practice_managements", column: "patientId", primary_key: "patientId", name: "fk_lab_pm"
  add_foreign_key "medications", "practice_managements", column: "doctorId", primary_key: "doctorId", name: "fk_med_pm"
  add_foreign_key "medications", "practice_managements", column: "patientId", primary_key: "patientId", name: "fk_med_pm"
  add_foreign_key "point_clicks", "documents", column: "doctorId", primary_key: "doctorId", name: "fk_pc_doc"
  add_foreign_key "point_clicks", "documents", column: "documentId", primary_key: "documentId", name: "fk_pc_doc"
  add_foreign_key "point_clicks", "documents", column: "patientId", primary_key: "patientId", name: "fk_pc_doc"
  add_foreign_key "voiceovers", "documents", column: "doctorId", primary_key: "doctorId", name: "fk_voice_doc"
  add_foreign_key "voiceovers", "documents", column: "documentId", primary_key: "documentId", name: "fk_voice_doc"
  add_foreign_key "voiceovers", "documents", column: "patientId", primary_key: "patientId", name: "fk_voice_doc"
end
