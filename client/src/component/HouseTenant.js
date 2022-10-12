import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

function Houseroom() {
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
          <h3 className="text-center text-bold">Rooms</h3>

          {(Array.isArray(houses.rooms) ? houses.rooms : []).map(
            (room) => {
              // console.log(room);
              return (
                <div key={room.id}>
                  <h5>
                    room-Number: <em>{room.room_no}</em>
                  </h5>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Houseroom