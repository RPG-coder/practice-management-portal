class CreatePracticeManagers < ActiveRecord::Migration[6.1]
  def change
    # Create Table PracticeManagers
    create_table :practice_managers, id: false do |t|
      t.string :practiceManagerId, primary_key: true

      t.timestamps
    end

    # A Practice Manager is a Person
    execute 'ALTER TABLE practice_managers ADD CONSTRAINT fk_mgr_pcp FOREIGN KEY(practiceManagerId) REFERENCES patient_care_personells(employeeId);'

    # A Practice Manager manages a Departments
    execute 'ALTER TABLE departments ADD CONSTRAINT fk_dept_mgr FOREIGN KEY(managerId) REFERENCES practice_managers(practiceManagerId);'
  end
end
