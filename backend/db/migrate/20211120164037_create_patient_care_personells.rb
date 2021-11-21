class CreatePatientCarePersonells < ActiveRecord::Migration[6.1]
  def change
    create_table :patient_care_personells, id: false do |t|
      t.string :employeeId, primary_key: true
      t.string :email, unique: true
      t.string :workRole

      t.timestamps
    end
    #execute 'ALTER TABLE patient_care_personells ADD CONSTRAINT fk_pcp_person FOREIGN KEY(employeeId) REFERENCES people(personId);'
  end
end
