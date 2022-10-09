class HousesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :house_not_found

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  # GET /houses
  def index
    houses = House.all
    render json: houses
  end

  #  GET /houses/:id
  def show
    house = House.find(params[:id])
    render json: house
  end

  # PATCH /houses/:id
  def update
    #f ind
    house = House.find(params[:id])
    # update
    House.update!(house_params)
    render json: house
  end

  private

  def house_params
    params.permit(:id, :house_no, :apartment_id)
  end

  def unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def house_not_found
    render json: { error: "house not found" }, status: :not_found
  end
end
