import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Tenants() {
    const [{ data: house, error, status }, setHouse] = useState({
    data: {},
    error: "",
    status: "pending",
  });
  const { id } = useParams();


  useEffect(() => {
    fetch( `/apartments/${id}` )
      .then( ( response ) =>
      {
      if (response.ok) {
        response.json()
          .then( ( house ) =>
          {
          console.log(house);
          setHouse({ data: house, error: "", status: "resolved" })
        } );
        // console.log(house);
      }
      else
      {
        response.json()
          .then((err) =>
            setHouse({ data: "not found", error: err.error, status: "rejected" })
          );
      }
    });
  }, [ id ] );
  
  // if (status === "pending") return <h1>Loading...</h1>;
  // if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div className="restbody">
      <div className="container bg-darksalmon">
        <div className="card restcards" key={house.id}>
          <img
            src={house.image}
            className="card-img-top restimages"
            alt={house.name}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{house.name}</h5>
            <p className="card-text text-center">{house.price}</p>
          </div>
        </div>
        {/*<div className="card restcards">
          <h3 className="text-center text-bold">Tenants</h3>
          {house.tenants.map((tenant) => (
            <div key={tenant.id}>
              <img className="tenantimg" src={tenant.image} />
              <h5>
                tenant-Name: <em>{tenant.name}</em>
              </h5>
              <h5>Description</h5>
              <p>
                <em className="text-center">{tenant.description}</em>
              </p>
              <h5>Ingredients</h5>
              <p>
                <em className="">{tenant.ingredients}</em>
              </p>
            </div>
          ))}
        </div>*/}
      </div>
    </div>
  );
}

export default Tenants;
