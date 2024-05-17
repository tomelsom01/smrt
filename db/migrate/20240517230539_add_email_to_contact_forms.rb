class AddEmailToContactForms < ActiveRecord::Migration[7.0]
  def change
    add_column :contact_forms, :email, :string
  end
end
