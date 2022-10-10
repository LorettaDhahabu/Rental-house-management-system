import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function HouseType ()
{
  const [housetypes, setHouseTypes] = useState([]);

  useEffect(() => {
    getHouseTypes();
  }, []);

  async function getHouseTypes() {
    let result = await fetch("/apartments");
    result = await result.json();
    setHouseTypes(result);
  }
  // function handleDelete(id) {
  //   fetch(`/api/restaurants/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       const deleteRestaurant = restaurants.filter(
  //         (restaurant) => housetype.id !== id
  //       );
  //       setRestaurants(deleteRestaurant);
  //     })

  //     .catch((err) => console.log(err));
  //   alert("successifully deleted");

  //   getRestaurants();
  // }

  let houseTypeList = housetypes.map((housetype) => {
    return (
      <div className="restbody" key={housetype.id}>
        <div className="container bg-darksalmon">
          <div className="card restcards">
            <img
              src={housetype.image}
              className="card-img-top restimages"
              alt={housetype.name}
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                Card title{housetype.name}
              </h5>
              <p className="card-text text-center">{housetype.description}</p>
              <p className="card-text text-center">
                <strong>
                  <em>Price: </em>
                </strong>
                {housetype.price}
              </p>
              <Link
                to={`/apartments/${housetype.id}`}
                onClick={() => <Restaurant key={housetype.id} />}
              >
                <button className="viewBtn">View More</button>
              </Link>
              {/* <div className="restaurant-details">
                <button
                  onClick={() => {
                    handleDelete(housetype.id);
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
  return <div>{houseTypeList}</div>;
  // return (
  //   <div><h1>HouseType</h1>
      
  //   </div>
    
  // )
}

export default HouseType