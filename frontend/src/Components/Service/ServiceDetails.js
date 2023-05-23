import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function EditService() {
  const [services, setServices] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8002/service/${id}`)
      .then((response) => {
        console.log(response);
        const { services } = response.data;
        setServices(services);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const { sID, fName, lName, address, nic, phone, email, gender, job, position } = services;

  return (
    <>
      <div className="order_bground" style={{ zIndex: 98, height: "100vh" }}>
        <div style={{ marginBlockStart: '9%', marginLeft: '15%' }}>
          <div className="card" style={{ width: '50%', height: '925px', borderBlockColor: 'black', borderBlockWidth: '4px', borderBlockStartStyle: 'groove' }}>
            <div className="card-body">
              <div className="container" style={{ marginTop: '20px' }}>
                <br />
                <h3>Service Details</h3>
                <br />
                <form>
                  <label>Employee ID</label>
                  <input className="form-control" type="text" value={sID} aria-label="Disabled input example" disabled />

                  <label>First Name</label>
                  <input className="form-control" type="text" value={fName} aria-label="Disabled input example" disabled />

                  <label>Last Name</label>
                  <input className="form-control" type="text" value={lName} aria-label="Disabled input example" disabled />

                  <label>Address</label>
                  <input className="form-control" type="text" value={address} aria-label="Disabled input example" disabled />

                  <label>NIC</label>
                  <input className="form-control" type="text" value={nic} aria-label="Disabled input example" disabled />

                  <label>Phone</label>
                  <input className="form-control" type="text" value={phone} aria-label="Disabled input example" disabled />

                  <label>Email</label>
                  <input className="form-control" type="text" value={email} aria-label="Disabled input example" disabled />

                  <label>Gender</label>
                  <input className="form-control" type="text" value={gender} aria-label="Disabled input example" disabled />

                  <label>Job Title</label>
                  <input className="form-control" type="text" value={job} aria-label="Disabled input example" disabled />

                  <label>Position</label>
                  <input className="form-control" type="text" value={position} aria-label="Disabled input example" disabled />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

