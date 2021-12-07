class CreateLabReports < ActiveRecord::Migration[6.1]
  def change
    create_table :lab_reports, id: false do |t|
      t.integer :patientId
      t.integer :doctorId
      t.integer :reportId, primary_key:true
      t.string :reportName
      t.string :worksheetFilepath
      t.string :patientFilepath
      t.timestamp :dueBy
      t.text :description

      t.timestamps
    end

    execute 'ALTER TABLE lab_reports ALTER COLUMN reportId SET DEFAULT 0;'
    execute "ALTER TABLE lab_reports MODIFY COLUMN reportId INT auto_increment;"

    # Composite Key on Lab Reports describing need for patient, doctor to exist for the report's existance
    #execute 'ALTER TABLE lab_reports ADD PRIMARY KEY(patientId, doctorId, reportId);'
    # Foreign Composite Key on Lab Reports describing need for patient-doctor relation to exist in practice-management
    execute 'ALTER TABLE lab_reports ADD CONSTRAINT fk_lab_pm FOREIGN KEY(patientId,doctorId) REFERENCES practice_managements(patientId,doctorId);'
  end
end
