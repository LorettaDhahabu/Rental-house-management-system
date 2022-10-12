import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Tenant from './Tenant';

function Tenants() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    getTenants();
  }, []);

  async function getTenants() {
    let result = await fetch("/tenants");
    result = await result.json();
    setTenants(result);
  }

  let tenantList = tenants.map((tenant) => {
    return (
      <div className="restbody" key={tenant.id}>
        <div className="container bg-darksalmon">
          <div className="card restcards">
            <div className="card-body">
              <h5 className="card-title text-center">
                Full Name: {tenant.name}
              </h5>
              <p className="card-text text-center">{tenant.age}</p>
              <p>
                <em className="text-center">{tenant.gender}</em>
              </p>
              <p>
                <em className="text-center">{tenant.house_no}</em>
              </p>
              <p>
                <em className="">{tenant.contact}</em>
              </p>
              <Link
                to={`/tenants/${tenant.id}`}
                onClick={() => <Tenant key={tenant.id} />}
              >
                <button className="viewBtn">View More</button>
              </Link>
              {/* <div className="restaurant-details">
                <button
                  onClick={() => {
                    handleDelete(tenant.id);
                  }}
                  className="deleteBtn"
                >
                  DELETE
                </button>
                
              {/* </div>  */}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{tenantList}</div>;
  
}


export default Tenants;
