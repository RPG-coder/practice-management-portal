# Managers are manually set in the DB by a DB admin
class CreateDepartments < ActiveRecord::Migration[6.1]
  def change
    create_table :departments, id: false do |t|
      t.integer :departmentId, primary_key: true
      t.string :departmentName
      t.integer :managerId
      t.integer :totalDoctors
      
      t.timestamps
    end

    execute "ALTER TABLE departments MODIFY COLUMN departmentId INT auto_increment;"

    # Setting default total number of doctors for a new department to 0
    execute 'ALTER TABLE departments ALTER COLUMN totalDoctors SET DEFAULT 0;'
  end
end
