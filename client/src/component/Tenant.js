import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

function Tenant() {
  const [{ data: tenant, error, status }, setTenant] = useState({
    data: {},
    error: "",
    status: "pending",
  } );
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  function handleChange(e) {
    setTenant({ ...setTenant, [e.target.id]: e.target.value });
  }

  const { id } = useParams();

  useEffect(() => {
    fetch( `/tenants/${id}` )
      .then( ( response ) =>
      {
      if (response.ok) {
        response.json()
          .then( ( tenant ) =>
          {
          // console.log(tenant);
          setTenant({ data: tenant, error: "", status: "resolved" });
        });
          // console.log(tenant);
      }
      else
      {
        response.json().then((err) =>
          setTenant({
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


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/tenants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tenant),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        setTenant(data);
      });
  }
  return (
    <div className="restbody">
      <div className="container bg-darksalmon">
        <div className="card restcards" key={tenant.id}>
          <div className="card-body">
            <h5 className="card-title text-center">
              Full Name: <em>{tenant.name}</em>
            </h5>
            <p className="card-text text-center">
              Apartment: {tenant.room.apartment_id}
            </p>
            <p className="card-text text-center">
              House.No: {tenant.room.room_no}
            </p>
            <p className="card-text text-center">Age: {tenant.age}</p>
            <p className="card-text text-center">Gender: {tenant.gender}</p>
            <p className="card-text text-center">
              Phone Number: {tenant.contact}
            </p>
            <p className="card-text text-center">
              Rent-paid: {tenant.payment.amount_paid}
            </p>
            <p className="card-text text-center">
              Date-paid: {tenant.payment.date}
            </p>
            <p className="card-text text-center">
              Invoice.no: {tenant.payment.invoice_no}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary my-4"
        data-toggle="modal"
        data-target="#exampleModal"
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
                Edit Tenant Details
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
                <form
                  className="adding-form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant name..."
                      value={tenant.name}
                      onChange={(e) => handleChange(e)}
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
                      value={tenant.age}
                      onChange={(e) => setTenant(e.target.value)}
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
                      value={tenant.gender}
                      onChange={(e) => setTenant(e.target.value)}
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
                      value={tenant.contact}
                      onChange={(e) => setTenant(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      {isLoading ? "Loading..." : "Add"}{" "}
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


export default Tenant