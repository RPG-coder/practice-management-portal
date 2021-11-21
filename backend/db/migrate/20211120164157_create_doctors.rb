class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    # Create Tables Doctors
    create_table :doctors, id: false do |t|
      t.string :doctorId, primary_key: true
      t.integer :totalPatients
      t.string :departmentId
      t.string :specializationDepartment
      t.text :doctorDescription
      t.integer :yearsOfExperience

      t.timestamps
    end
    
    # Setting default total number of patients & years of experience for a new doctor to 0
    execute 'ALTER TABLE doctors ALTER COLUMN totalPatients SET DEFAULT 0;'
    execute 'ALTER TABLE doctors ALTER COLUMN yearsOfExperience SET DEFAULT 0;'

    # S Doctor is a person
    execute 'ALTER TABLE doctors ADD CONSTRAINT fk_doctor_pcp FOREIGN KEY(doctorId) REFERENCES patient_care_personells(employeeId);'
    # A Doctor is part of a department
    execute 'ALTER TABLE doctors ADD CONSTRAINT fk_doctor_dept FOREIGN KEY(departmentId) REFERENCES departments(departmentId);'

    # Activating dependent trigger conditions
    execute (
      'CREATE TRIGGER incr_doctors_count '+
      'AFTER INSERT ON doctors '+
      'FOR EACH ROW BEGIN '+
      '  UPDATE departments as d SET totalDoctors = (totalDoctors+1) WHERE d.departmentId = new.departmentId; '+
      'END'
    )
    execute (
      'CREATE TRIGGER update_doctors_dept '+
      'AFTER UPDATE ON doctors '+
      'FOR EACH ROW BEGIN '+
      '  UPDATE departments as d SET totalDoctors = (totalDoctors-1) WHERE d.departmentId = old.departmentId; '+
      '  UPDATE departments as d SET totalDoctors = (totalDoctors+1) WHERE d.departmentId = new.departmentId; '+
      'END'
    )
    execute (
      'CREATE TRIGGER decr_doctors_count '+
      'AFTER DELETE ON doctors '+
      'FOR EACH ROW BEGIN '+
      '  UPDATE departments as d SET totalDoctors = (totalDoctors-1) WHERE d.departmentId = old.departmentId; '+
      'END'
    )
  end
end
