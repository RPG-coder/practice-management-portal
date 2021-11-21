class CreateFreeTexts < ActiveRecord::Migration[6.1]
  def change
    create_table :free_texts, id: false do |t|
      t.string :documentId
      t.string :patientId
      t.string :doctorId
      t.text :textNotes

      t.timestamps
    end

    # Composite Key on Free Text Documents describing need for patient, doctor to exist for the document's existance
    execute 'ALTER TABLE free_texts ADD PRIMARY KEY(patientId, doctorId, documentId);'
    # Foreign Composite Key on Free Text Documents direct relation to a entity in Documents
    execute 'ALTER TABLE free_texts ADD CONSTRAINT fk_text_doc FOREIGN KEY(patientId,doctorId,documentId) REFERENCES documents(patientId,doctorId,documentId);'
  end
end
