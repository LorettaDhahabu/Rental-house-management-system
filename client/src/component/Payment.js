import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


function Payment ()
{
    const [{ data: payment, error, status }, setPayment] = useState({
      data: {},
      error: "",
      status: "pending",
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
      setPayment({ ...setPayment, [e.target.id]: e.target.value });
    }
  
  function handleSubmitInvoice ()
  {
    window.print();
  }

    const { id } = useParams();

    useEffect(() => {
      fetch(`/payments/${id}`).then((response) => {
        if (response.ok) {
          response.json().then((payment) => {
            // console.log(payment);
            setPayment({ data: payment, error: "", status: "resolved" });
          });
          // console.log(payment);
        } else {
          response.json().then((err) =>
            setPayment({
              data: "not found",
              error: err.error,
              status: "rejected",
            })
          );
        }
      });
    }, [id]);

    if (status === "pending") return <h1>Loading...</h1>;
    if (status === "rejected") return <h1>Error: {error.error}</h1>;
  return (
    <div className="restbody">
      <div className="container bg-darksalmon">
        <div className="card restcards" key={payment.id}>
          <div className="card-body">
            <h5 className="card-title text-center">
              Full Name: <em>{payment.tenant.name}</em>
            </h5>
            <p className="card-text text-center">
              Invoice: {payment.invoice_no}
            </p>
            <p className="card-text text-center">
              Amount Paid: {payment.amount_paid}
            </p>
            <p className="card-text text-center">Date: {payment.date}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary my-4"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={handleSubmitInvoice}
      >
        Print
      </button>
    </div>
  );
}

export default Payment;