import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

function HouseTenant() {
  const [{ data: houses, error, status }, setHouses] = useState({
    data: {},
    error: "",
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/apartments/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((houses) => {
          // console.log(houses);
          setHouses({ data: houses, error: "", status: "resolved" });
        });
        // console.log(houses);
      } else {
        response
          .json()
          .then((err) =>
            setHouses({
              data: "not found",
              error: err.error,
              status: "rejected",
            })
          );
      }
    });
  }, [id]);

  return (
    <div className="restbody">
      <div className="container bg-darksalmon">
        <div className="card restcards" key={houses.id}>
          <img
            src={houses.image}
            className="card-img-top restimages"
            alt={houses.name}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{houses.name}</h5>
            <p className="card-text text-center">{houses.price}</p>
          </div>
        </div>
        <div className="card restcards">
          <h3 className="text-center text-bold">Tenants</h3>

          {(Array.isArray(houses.tenants) ? houses.tenants : []).map(
            (tenant) => {
              // console.log(tenant);
              return (
                <div key={tenant.id}>
                  <h5>
                    tenant-Name: <em>{tenant.name}</em>
                  </h5>
                  <p>
                    <em className="text-center">{tenant.age}</em>
                  </p>
                  <p>
                    <em className="text-center">{tenant.gender}</em>
                  </p>
                  <p>
                    <em className="text-center">{tenant.house_no}</em>
                  </p>
                  <p>
                    <em className="">{tenant.contact}</em>
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default HouseTenant