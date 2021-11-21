class CreatePracticeManagements < ActiveRecord::Migration[6.1]
  def change
    create_table :practice_managements, id: false do |t|
      t.string :patientId
      t.string :employeeId
      t.boolean :isDoctor

      t.timestamps
    end
    # Composite Primary key for Patients-Employee management relations
    execute 'ALTER TABLE practice_managements ADD PRIMARY KEY(patientId,employeeId);'
    # Composite Primary key for Patients-Employee management relations
    execute 'ALTER TABLE practice_managements ADD CONSTRAINT FOREIGN KEY(employeeId) REFERENCES patient_care_personells(employeeId);'

    # Check if Employee is a Doctor when a patient-employee management record is generated
    execute (
      'CREATE TRIGGER set_isdoctor '+
      'AFTER INSERT ON practice_managements FOR EACH ROW '+
      'UPDATE practice_managements as p SET isDoctor = IF(p.employeeId IN (SELECT doctorId FROM doctors),1,0) '+
      'WHERE p.employeeId = NEW.employeeId;'
    )
  end
end
