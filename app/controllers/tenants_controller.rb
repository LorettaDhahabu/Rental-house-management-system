class TenantsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :tenant_not_found

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  # GET /tenants
  def index
    tenants = Tenant.all
    render json: tenants
  end

  #  GET /tenants/:id
  def show
    tenant = Tenant.find(params[:id])
    render json: tenant, serializer: TenantAndApartmentSerializer, status: :ok
  end

  # POST/tenants
  def create
    tenant = Tenant.create!(tenant_params)
    render json: tenant, status: :created
  end

  # PATCH /tenants/:id
  def update
    #find
    tenant = Tenant.find(params[:id])
    Tenant.update!(tenant_params)
    render json: tenant
  end

  # DELETE /tenants/:id
    def destroy
        # find
        tenant = Tenant.find(params[:id])
        # delete
        tenant.destroy
        head :no_content
    end

  private

  def tenant_params
    params.permit(:id, :name, :age, :gender, :contact, :landlord_id, :apartment_id, :house_no)
  end

  def unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def tenant_not_found
    render json: { error: "tenant not found" }, status: :not_found
  end
end
