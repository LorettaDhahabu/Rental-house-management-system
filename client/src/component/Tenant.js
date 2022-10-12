import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

function Tenant() {
  const [{ data: tenant, error, status }, setTenant] = useState({
    data: {},
    error: "",
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/tenants/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((tenant) => {
          console.log(tenant);
          setTenant({ data: tenant, error: "", status: "resolved" });
        });
        //   console.log(tenant);
      } else {
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
    </div>
  );
}

export default Tenant