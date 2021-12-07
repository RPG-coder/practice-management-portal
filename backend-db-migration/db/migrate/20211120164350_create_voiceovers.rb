class CreateVoiceovers < ActiveRecord::Migration[6.1]
  def change
    create_table :voiceovers, id: false do |t|
      t.integer :documentId, primary_key:true
      t.integer :patientId
      t.integer :doctorId
      t.string :audioLink
      t.text :transcript

      t.timestamps
    end

    # Composite Key on Voiceover Documents describing need for patient, doctor to exist for the document's existance
    #execute 'ALTER TABLE voiceovers ADD PRIMARY KEY(patientId, doctorId, documentId);'
    # Foreign Composite Key on Voiceover Documents direct relation to a entity in Documents
    execute 'ALTER TABLE voiceovers ADD CONSTRAINT fk_voice_doc FOREIGN KEY(patientId,doctorId,documentId) REFERENCES documents(patientId,doctorId,documentId);'
  end
end
