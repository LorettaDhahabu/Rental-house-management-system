class ApartmentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :apartment_not_found

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  # GET /apartments
  def index
    apartments = Apartment.all
    render json: apartments
  end

  #  GET /apartments/:id
  def show
    apartment = Apartment.find(params[:id])
    render json: apartment, serializer: HouseTenantSerializer, status: :ok
  end

  # PATCH /apartments/:id
  def update
    #f ind
    apartment = Apartment.find(params[:id])
    # update
    Apartment.update!(apartment_params)
    render json: apartment
  end

  private

  def apartment_params
    params.permit(:id, :name, :image, :description, :price)
  end

  def unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def apartment_not_found
    render json: { error: "apartment not found" }, status: :not_found
  end
end
