class PaymentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :payment_not_found

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  # GET /payments
  def index
    payments = Payment.all
    render json: payments
  end

  #  GET /payments/:id
  def show
    payment = Payment.find(params[:id])
    render json: payment, status: :ok
  end

  # POST/payments
  def create
    payment = Payment.create!(payment_params)
    render json: payment, status: :created
  end

  # PATCH /payments/:id
  def update
    #find
    payment = Payment.find(params[:id])
    Payment.update!(payment_params)
    render json: payment
  end

  # DELETE /payments/:id
  def destroy
    # find
    payment = Payment.find(params[:id])
    # delete
    Payment.destroy
    head :no_content
  end

  private

  def payment_params
    params.permit(:id, :tenant_id, :invoice_no, :amount_paid, :date)
  end

  def unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def payment_not_found
    render json: { error: "payment not found" }, status: :not_found
  end
end
