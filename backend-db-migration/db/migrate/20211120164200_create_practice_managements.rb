class CreatePracticeManagements < ActiveRecord::Migration[6.1]
  def change
    create_table :practice_managements, id: false do |t|
      t.integer :patientId
      t.integer :doctorId

      t.timestamps
    end
    # Composite Primary key for Patients-Employee management relations
    execute 'ALTER TABLE practice_managements ADD PRIMARY KEY(patientId,doctorId);'
    

    # TRIGGER BEFORE INSERT INTO practice_managements
    # IF NEW.doctorId NOT IN ( SELECT DISTINCT(doctorId) FROM practice_managements)
    # EXECUTE INSERT INTO doctors (doctorId, doctorsDescription) VALUES (NEW.doctorsId, '')

  end
end
