class CreatePatientReports < ActiveRecord::Migration[6.1]
  def change
    create_table :patient_reports, id: false do |t|
      t.integer :patientId
      t.integer :reportId, primary_key:true
      t.integer :height
      t.integer :weight
      t.integer :bodyMassIndex
      t.integer :bloodPressure_systolic
      t.integer :bloodPressure_diastolic
      t.boolean :smokingStatus

      t.timestamps
    end

    execute 'ALTER TABLE patient_reports ALTER COLUMN reportId SET DEFAULT 0;'
    execute "ALTER TABLE patient_reports MODIFY COLUMN reportId INT auto_increment;"
    #execute 'ALTER TABLE patient_reports ADD PRIMARY KEY(patientId, reportId);'
  end
end
