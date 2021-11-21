class CreateDepartments < ActiveRecord::Migration[6.1]
  def change
    create_table :departments, id: false do |t|
      t.string :departmentId, primary_key: true
      t.string :departmentName
      t.string :managerId
      t.integer :totalDoctors
      
      t.timestamps
    end
    # Setting default total number of doctors for a new department to 0
    execute 'ALTER TABLE departments ALTER COLUMN totalDoctors SET DEFAULT 0;'
  end
end
