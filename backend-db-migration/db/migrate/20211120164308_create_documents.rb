class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents, id: false do |t|
      t.integer:documentId, primary_key:true
      t.integer :patientId
      t.integer :doctorId
      t.text :description

      t.timestamps
    end

    #execute 'ALTER TABLE documents ALTER COLUMN documentId SET DEFAULT 0;'
    execute "ALTER TABLE documents MODIFY COLUMN documentId INT auto_increment;"

    #execute 'ALTER TABLE documents ADD PRIMARY KEY(patientId, doctorId, documentId);'
    # Foreign Composite Key on Documents relating to practice management's Doctor-Patient relations
    execute 'ALTER TABLE documents ADD CONSTRAINT fk_doc_pm FOREIGN KEY(patientId,doctorId) REFERENCES practice_managements(patientId,doctorId);'
    
    

  end
end
