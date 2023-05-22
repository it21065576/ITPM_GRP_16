import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { TextField } from '@material-ui/core';



const ServiceDash = ({ match }) => {
    // const ServiceDash = () => {

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        address: '',
        nic: '',
        phone: '',
        email: '',
        gender: '',
        job: '',
        position: '',
    });

    const [services, setServices] = useState([]);
    const [allServices, setAllServices] = useState([]);
    const [serQuery, setQuery] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8002/service")
            .then(res => {
                console.log(res);
                setServices(res.data);
                setAllServices(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { fName, lName, address, nic, phone, email, gender, job, position } = formData;

        const data = {
            fName: fName,
            lName: lName,
            address: address,
            nic: nic,
            phone: phone,
            email: email,
            gender: gender,
            job: job,
            position: position,
        };

        // validation
        const ph = /^[0-9\b]+$/;
        const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ((!ph.test(String(phone))) || phone.length !== 10) {
            Swal.fire('Invalid Contact Number!', 'Contact number should be in a valid pattern.', 'error');
        } else if ((!emi.test(String(email)))) {
            Swal.fire('Invalid email address!', 'Please enter a valid email address.', 'error');
        } else if (
            fName.length === 0 ||
            lName.length === 0 ||
            address.length === 0 ||
            nic.length === 0 ||
            phone.length === 0 ||
            email.length === 0 ||
            gender.length === 0 ||
            job.length === 0 ||
            position.length === 0
        ) {
            Swal.fire('Please fill in all the details.');
        } else {
            axios.put(`http://localhost:8002/service/update/${match.params.id}`, data)
                .then((res) => {
                    let path = "/serviceDash";
                    if (res.data.success) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Details Saved Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setFormData({
                            fName: '',
                            lName: '',
                            address: '',
                            nic: '',
                            phone: '',
                            email: '',
                            gender: '',
                            job: '',
                            position: '',
                        });
                    }
                });
        }
    };


    return (

        <>

            <div style={{ marginLeft: '7%', marginBlockStart: '-4%' }}>

                <div className="card" style={{ width: '50rem', height: '70rem' }}>
                    <div className="card-body">
                        <center><h1><span className="badge bg-warning text-dark opacity-90">Edit Employee</span></h1></center>
                        <br></br>
                        <div >
                            <form className="need-validation" noValidate >

                                <TextField
                                    type="text"
                                    label="First Name"
                                    variant="outlined"
                                    name="fName"
                                    placeholder="Enter First Name"
                                    value={formData.fName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px', marginBlockStart: "4%" }}
                                />

                                <TextField
                                    type="text"
                                    label="Last Name"
                                    variant="outlined"
                                    name="lName"
                                    placeholder="Enter Last Name"
                                    value={formData.lName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px' }}
                                />

                                <TextField
                                    type="textarea"
                                    label="Address"
                                    variant="outlined"
                                    name="address"
                                    placeholder="Enter Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px' }}
                                />

                                <TextField
                                    type="text"
                                    label="NIC"
                                    variant="outlined"
                                    name="nic"
                                    placeholder="Enter NIC no"
                                    value={formData.nic}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px' }}
                                />

                                <TextField
                                    type="text"
                                    label="Contact Number"
                                    variant="outlined"
                                    name="phone"
                                    placeholder="Enter Mobile no"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px' }}
                                />

                                <TextField
                                    type="text"
                                    label="Email Address"
                                    variant="outlined"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px' }}
                                />

                                <TextField
                                    select
                                    label="Gender"
                                    variant="outlined"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px', cursor: "pointer" }}
                                >
                                    <option value="" disabled>
                                        -- Select Gender --
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </TextField>


                                <TextField
                                    select
                                    label="Job Title"
                                    variant="outlined"
                                    name="job"
                                    value={formData.job}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px', cursor: "pointer" }}
                                >
                                    <option value="" disabled>
                                        -- Select Job --
                                    </option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Police">Police</option>
                                    <option value="Counsellor">Counsellor</option>
                                    <option value="Lawyer">Lawyer</option>
                                    <option value="Other">Other</option>
                                </TextField>


                                <TextField
                                    type="text"
                                    label="Position"
                                    variant="outlined"
                                    name="position"
                                    placeholder="Enter Position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    fullWidth
                                    style={{ marginBottom: '25px' }}
                                />


                            </form>
                            <br></br>
                            <center>
                                <a className="btn btn-warning btn-lg" type="submit" style={{ marginTop: '15px', marginLeft: '1%' }} onClick={onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; Update
                                </a>
                                &nbsp;
                                &nbsp;
                            </center>
                            <br></br>

                        </div>

                    </div>
                </div>
                <br></br>
            </div>
        </>
    )
}

export default ServiceDash;
