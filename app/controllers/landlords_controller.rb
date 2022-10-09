class LandlordsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :landlord_not_found

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  # GET /landlords
  def index
    landlords = Landlord.all
    render json: landlords
  end

  #  GET /landlords/:id
  def show
    landlord = Landlord.find(params[:id])
    render json: landlord
  end

  # PATCH /landlords/:id
  def update
    #f ind
    landlord = Landlord.find(params[:id])
    # update
    Landlord.update!(landlord_params)
    render json: landlord
  end

  private

  def landlord_params
    params.permit(:id, :name, :username, :email, :password_digest)
  end

  def unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def landlord_not_found
    render json: { error: "landlord not found" }, status: :not_found
  end
end
