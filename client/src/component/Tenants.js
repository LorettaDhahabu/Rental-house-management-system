import { useState, useEffect } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useParams, useNavigate } from "react-router-dom";
import Tenant from "./Tenant";

function Tenants({ onAddingTenant }) {
  const [tenants, setTenants] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [ contact, setContact ] = useState( "" );
  const [room_id, setRoomNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTenants();
  }, []);

  async function getTenants() {
    let result = await fetch("/tenants");
    result = await result.json();
    setTenants(result);
  }

  function deleteTenant(id) {
    fetch(`/tenants/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => {
        const deleting = tenants.filter((row) => row.id !== id);
        setTenants(deleting);
      })

      .catch((err) => console.log(err));
    alert("delete was successful");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/tenants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        gender,
        contact,
        room_id,
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((newTenant) => {
          console.log(newTenant);
          onAddingTenant(newTenant);

          navigate(`/tenants/${id}`);
          setErrors([]);
        } );
        
        // navigate("/dashboard");
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      {/* <button className='my-4'>+ Tenant</button> */}
      <button
        type="button"
        className="btn btn-primary my-4"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        + Tenant
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Tenant
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="addtenant-pg">
                <form className="adding-form" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      class="form-control"
                      placeholder="enter tenant name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Age</label>
                    <input
                      type="number{ >= 18}"
                      id="age"
                      autoComplete="off"
                      class="form-control"
                      placeholder="enter tenant age..."
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Gender</label>
                    <input
                      type="ext"
                      id="gender"
                      autoComplete="off"
                      class="form-control"
                      placeholder="enter tenant gender..."
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Contact</label>
                    <input
                      type="tel"
                      id="contact"
                      autoComplete="off"
                      class="form-control"
                      placeholder="enter tenant contact..."
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Room</label>
                    <input
                      type="text"
                      id="room-no"
                      autoComplete="off"
                      class="form-control"
                      placeholder="enter tenant room..."
                      value={room_id}
                      onChange={(e) => setRoomNumber(e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary">
                      {isLoading ? "Loading..." : "Add"}{" "}
                      <i class="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div class="form-group">
                    {errors.map((err) => (
                      <div key={err}>{err}</div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Full Name</TableCell>
              <TableCell align="right">age</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">View</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tenants.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                <TableCell align="right">
                  <Link
                    to={`/tenants/${row.id}`}
                    onClick={() => <Tenant key={row.id} />}
                  >
                    <button className="viewBtn">View More</button>
                  </Link>
                </TableCell>
                <button
                  onClick={() => {
                    deleteTenant(row.id);
                  }}
                  type="button"
                  className="btn-danger my-3"
                >
                  Vacate
                </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tenants;
