class CreateNurses < ActiveRecord::Migration[6.1]
  def change
    create_table :nurses, id: false  do |t|
      t.string :nurseId, primary_key: true

      t.timestamps
    end
    # A Nurse is a Person
    execute 'ALTER TABLE nurses ADD CONSTRAINT fk_nurse_pcp FOREIGN KEY(nurseId) REFERENCES patient_care_personells(employeeId);'
  end
end
