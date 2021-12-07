class CreateNurses < ActiveRecord::Migration[6.1]
  def change
    create_table :nurses, id: false  do |t|
      t.integer :nurseId, primary_key: true
      t.string :nurseFirstName
      t.string :nurseMiddleName
      t.string :nurseLastName
      t.integer :age
      t.string :address
      t.string :contactNo
      t.string :description

      t.timestamps
    end
    execute "ALTER TABLE nurses MODIFY COLUMN nurseId INT auto_increment;"
  end
end
