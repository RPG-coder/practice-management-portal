class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications, id: false do |t|
      t.string :patientId
      t.string :doctorId
      t.string :medicationId
      t.string :medicationName
      t.string :medicationRoutine
      t.timestamp :tillDate
      t.text :description

      t.timestamps
    end
    # Composite Key on Medications describing need for patient, doctor to exist for the report's existance
    execute 'ALTER TABLE medications ADD PRIMARY KEY(patientId, doctorId, medicationId);'
    # Foreign Composite Key on Medications describing need for patient-doctor relation to exist in practice-management
    execute 'ALTER TABLE medications ADD CONSTRAINT fk_med_pm FOREIGN KEY(patientId,doctorId) REFERENCES practice_managements(patientId,employeeId);'
  end
end
