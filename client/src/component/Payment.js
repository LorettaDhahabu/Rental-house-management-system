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
  const [ isLoading, setIsLoading ] = useState( false );
  const [editpayment, setEditPayment] = useState({
    invoice_no: "",
    amount_paid: "",
    date: "",
  });

  function FillEditInput(payment) {
    setEditPayment({
      name: payment.invoice_no,
      age: payment.amount_paid,
      gender: payment.date,
    });
    // console.log(tenant);
  }
  function handleChange(e) {
    setEditPayment({ ...editpayment, [e.target.id]: e.target.value });
  }
    // function handleChange(e) {
    //   setPayment({ ...setPayment, [e.target.id]: e.target.value });
    // }
  
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
  if ( status === "rejected" ) return <h1>Error: { error.error }</h1>;
  
  function handleSubmit ( e )
  {
    e.preventDefault();

    console.log( editpayment );
    fetch( `/payments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( editpayment ),
    } )
      .then( ( response ) => response.json() )
      .then( ( data ) =>
      {
        // console.log(data);
        setPayment( data );
      } );
  }
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

      <button
        type="button"
        className="btn btn-primary my-4"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => FillEditInput(tenant)}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Payment Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="addtenant-pg">
                <form className="adding-form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant name..."
                      value={editpayment.invoice_no}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Age</label>
                    <input
                      type="number{ >= 18}"
                      id="age"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant age..."
                      value={editpayment.amount_paid}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Gender</label>
                    <input
                      type="ext"
                      id="gender"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant gender..."
                      value={editpayment.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Contact</label>
                    <input
                      type="tel"
                      id="contact"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant contact..."
                      value={edittenant.contact}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      {isLoading ? "Loading..." : "Change"}{" "}
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="form-group">
                    {errors.map((err) => (
                      <div key={err}>{err}</div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;