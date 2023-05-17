import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const ServiceDash = () => {
    const [services, setServices] = useState([]);
    const [allServices, setAllServices] = useState([]);
    const [serQuery, setQuery] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8002/service')
            .then(res => {
                setServices(res.data);
                setAllServices(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const onDelete = (id) => {
        axios.delete(`http://localhost:8002/service/delete/${id}`)
            .then((res) => {
                swal("Deleted Successfully");
                deleteService();
            })
    }

    const deleteService = () => {
        axios.get("http://localhost:8002/service")
            .then((response) => {
                setServices(response.data);
                setAllServices(response.data);
            });
    }
    function searchfun(e) {

        setQuery(e.target.value)
    }

    return (
        <>

            <div className="order_bground" style={{ zIndex: 98, height: "100vh" }} >
                <br />
                <div style={{ width: '20%', marginLeft: '80%', marginBlockStart: '2%' }}>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={searchfun}
                        />
                    </form>
                </div>

                <center>
                    <h1>
                        <span className="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '3%' }}>
                            All Service Providers
                        </span>
                    </h1>
                </center>
                <br />

                <div>
                    <table className="table table-bordered" style={{ width: '100%', marginBlockStart: '-1%' }} >
                        <thead className="table-info">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Position</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services && services.filter(e =>



                                e.fName.toLowerCase().includes(serQuery) ||
                                e.fName.includes(serQuery) ||

                                e.email.toLowerCase().includes(serQuery) ||
                                e.email.includes(serQuery) ||

                                e.job.toLowerCase().includes(serQuery) ||
                                e.job.includes(serQuery) ||

                                e.position.toLowerCase().includes(serQuery) ||
                                e.position.includes(serQuery) ||

                                e.phone.toLowerCase().includes(serQuery) ||
                                e.phone.includes(serQuery) 


                            ).map((service, index) => (
                                <tr key={index}>
                                    <th className="table-light" scope="row">{index + 1}</th>
                                    <td className="table-light">{service.fName}</td>
                                    <td className="table-light">{service.email}</td>
                                    <td className="table-light">{service.phone}</td>
                                    <td class="table-light">{service.job}</td>
                                    <td class="table-light">{service.position}</td>
                                    <td class="table-light">

                                        <a class="btn btn-warning" style={{ marginLeft: '-1%', width: '50%' }} href={`/editEmployee/${services._id}`}> <i className="fas fa-edit"></i>Edit</a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        {/* <a class="btn btn-danger" style={{ marginLeft: '50%', width: '50%', marginBlockStart: '-34%' }} onClick={() => this.onDelete(services._id)} ><i className="far fa-trash-alt"></i>Delete</a> */}
                                        <button className="btn btn-danger" style={{ marginLeft: '50%', width: '50%', marginBlockStart: '-34%' }} onClick={() => onDelete(service._id)}><i className="far fa-trash-alt"></i>Delete</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <br></br>

                    <div>

                        <a style={{ marginLeft: '35%' }} className="btn btn-warning text-dark " href="/addService" >
                            <i className="fas fa-user-plus"></i>&nbsp;Add New Service Provider
                        </a>
                        &nbsp;
                        <a style={{ marginLeft: '1%' }} className="btn btn-warning text-dark " href="/staff_dash" >
                            Dash Board
                        </a>
                    </div>
                    <br></br>
                    <br></br>
                </div>

                {/* </div> */}
            </div>
        </>
    )

}


export default ServiceDash;

