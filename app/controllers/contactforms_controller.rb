class ContactFormsController < ApplicationController
  def index
    @contacts = ContactForm.all
  end

  def new
    @contact = ContactForm.new
  end

  def create
    @contact = ContactForm.new(contact_params)
    if @contact.save
      redirect_to root_path, notice: 'Contact form was successfully submitted.'
    else
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact_form).permit(:name, :address, :telephone, :message)
  end
end
