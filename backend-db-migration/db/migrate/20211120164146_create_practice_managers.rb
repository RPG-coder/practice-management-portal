# Department Managers are manually set in the department by a DB admin
class CreatePracticeManagers < ActiveRecord::Migration[6.1]
  def change
    # Create Table PracticeManagers
    create_table :practice_managers, id: false do |t|
      t.integer :managerId, primary_key: true
      t.string :managerFirstName
      t.string :managerMiddleName
      t.string :managerLastName
      t.integer :age
      t.string :address
      t.string :contactNo
      t.string :description

      t.timestamps
    end

    execute "ALTER TABLE practice_managers MODIFY COLUMN managerId INT auto_increment;"

    # A Practice Manager manages a Departments
    execute 'ALTER TABLE departments ADD CONSTRAINT fk_dept_mgr FOREIGN KEY(managerId) REFERENCES practice_managers(managerId);'
  end
end
