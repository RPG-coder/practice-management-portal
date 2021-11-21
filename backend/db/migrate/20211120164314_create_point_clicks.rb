class CreatePointClicks < ActiveRecord::Migration[6.1]
  def change
    create_table :point_clicks, id: false do |t|
      t.string :documentId
      t.string :patientId
      t.string :doctorId
      t.json :formData

      t.timestamps
    end

    # Composite Key on Point&Click Documents describing need for patient, doctor to exist for the document's existance
    execute 'ALTER TABLE point_clicks ADD PRIMARY KEY(patientId, doctorId, documentId);'
    # Foreign Composite Key on Point&Click Documents direct relation to a entity in Documents
    execute 'ALTER TABLE point_clicks ADD CONSTRAINT fk_pc_doc FOREIGN KEY(patientId,doctorId,documentId) REFERENCES documents(patientId,doctorId,documentId);'
  end
end
