class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents, id: false do |t|
      t.string :documentId
      t.string :patientId
      t.string :doctorId
      t.text :description

      t.timestamps
    end
    
    # Composite Key on Documents describing need for patient, doctor to exist for the document's existance
    execute 'ALTER TABLE documents ADD PRIMARY KEY(patientId, doctorId, documentId);'
    # Foreign Composite Key on Documents relating to practice management's Doctor-Patient relations
    execute 'ALTER TABLE documents ADD CONSTRAINT fk_doc_pm FOREIGN KEY(patientId,doctorId) REFERENCES practice_managements(patientId,employeeId);'

  end
end
