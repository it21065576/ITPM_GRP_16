import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Navbar from '../Navbar';





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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8002/service/delete/${id}`)
                    .then((res) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Deleted',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        deleteService();
                    })
                    .catch((error) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Failed to delete',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
            }
        });
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
        <Navbar/>
            <div style={{ width: '20%', marginLeft: '80%', marginBlockStart: '2%' }}>
                <form className="d-flex">
                    <input className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search" onChange={searchfun}>
                    </input>
                </form>
            </div>

            <center>
                <h1>
                    <span className="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '3%' }}>
                        All Service Providers
                    </span>
                </h1>
            </center>

            <div>
                <div>
                    <table className="table table-bordered" style={{ width: '100%', marginBlockStart: '2%' }}>
                        <thead className="table-info">
                            <tr>
                                <th scope="col">#</th>
                                <th scope='col'>Service ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Position</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services &&
                                services
                                    .filter((e) => {
                                        const lowerCaseSerQuery = serQuery.toLowerCase();
                                        return (
                                            e.sID && e.sID.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.fName.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.email.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.job.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.position.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.phone.toLowerCase().includes(lowerCaseSerQuery)
                                        );
                                    })
                                    .map((service, index) => (
                                        <tr key={index}>
                                            <th className="table-light" scope="row">{index + 1} </th>
                                            <td className="table-light">
                                                <a href={`/serviceDetails/${services._id}`} style={{ textDecoration: 'none' }}>
                                                    {service.sID}
                                                </a>
                                            </td>
                                            <td className="table-light">{service.fName}</td>
                                            <td className="table-light">{service.email}</td>
                                            <td className="table-light">{service.phone}</td>
                                            <td className="table-light">{service.job}</td>
                                            <td className="table-light">{service.position}</td>
                                            <td className="table-light" style={{ width: '25%' }}>

                                                <div className="d-flex justify-content-center">
                                                    <Button
                                                        variant="contained"
                                                        color="warning"
                                                        startIcon={<EditIcon />}
                                                        style={{ width: '30%', backgroundColor: 'seagreen' }}
                                                        href={`/editService/${service._id}`}
                                                    >
                                                        Edit
                                                    </Button>

                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        startIcon={<DeleteIcon />}
                                                        style={{ width: '30%', marginLeft: '10px', backgroundColor: 'dark red' }}
                                                        onClick={() => onDelete(service._id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>

                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ marginBlockStart: '2%' }}>
                    <Box display="flex" justifyContent="center">
                        <Button
                            as={Link}
                            to="/addService"
                            variant="warning"
                            className="text-dark"
                            style={{ marginLeft: '-1%', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)', backgroundColor: 'ThreeDDarkShadow', padding: '10px 20px' }}
                        >
                            <AddCircleIcon sx={{ marginRight: '0.5rem' }} />
                            Add New Service Provider
                        </Button>

                        <Button
                            as={Link}
                            to="/"
                            variant="warning"
                            className="text-dark"
                            style={{ marginLeft: '1%', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)', backgroundColor: 'honeydew', padding: '10px 20px' }}
                        >
                            <DashboardIcon sx={{ marginRight: '0.5rem' }} />
                            Dashboard
                        </Button>
                    </Box>
                </div>
            </div >
        </>
    )
}

export default ServiceDash;