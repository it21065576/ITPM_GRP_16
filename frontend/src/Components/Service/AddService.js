import React, { useState } from 'react';
import axios from 'axios';
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { useNavigate, navigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Swal from 'sweetalert2';




export default function AddService(props) {

    const [formData, setFormData] = useState({
        sID: '',
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

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const btnDemo = (e) => {
        e.preventDefault();
        setFormData({
            sID: 'S1100',
            fName: 'kamal',
            lName: 'liyanagama',
            address: '43/1,kalidasa road matara',
            nic: '200133002366',
            phone: '0786537261',
            email: 'kamal@gmail.com',
            gender: 'Female',
            job: 'Doctor',
            position: 'senior'
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { sID, fName, lName, address, nic, phone, email, gender, job, position } = formData;

        const data = {
            sID: sID,
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

        console.log(data);

        const ph = /^[0-9\b]+$/;
        const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ((!ph.test(String(phone))) || phone.length !== 10) {
            Swal.fire('Invalid Contact Number !', 'contact number should be valid pattern', 'error');
        } else if ((!emi.test(String(email)))) {
            Swal.fire('Invalid email address !', 'Please enter valid email address', 'error');
        } else if (
            sID.length === 0 ||
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
            Swal.fire('Please fill all the details');
        } else {
            axios.post('http://localhost:8002/service/save', data).then((res) => {
                if (res.data.success) {
                    // Swal.fire('Details Saved Successfully');
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Details Saved Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/serviceDash'); // Navigate to '/serviceDash'
                    setFormData({
                        sID: '',
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
            <div className="order_bground" style={{ zIndex: 98, height: "100vh" }}>
                <div className="order_bground" style={{ zIndex: 98, height: "100vh" }}>
                    <div style={{ marginLeft: "28%", marginBlockStart: "3%" }}>
                        <div class="card" style={{ width: "60%", height: "100%" }}>
                            <div class="card-body">
                                <center>
                                    <h1>
                                        <span class="badge bg-warning text-dark opacity-90" >
                                            Add New Service Provider
                                        </span>
                                    </h1>
                                </center>
                                <form className="need-validation" noValidate >

                                    <TextField
                                        type="text"
                                        label="Service ID"
                                        variant="outlined"
                                        name="sID"
                                        placeholder="Enter Service ID"
                                        value={formData.sID}
                                        onChange={handleInputChange}
                                        fullWidth
                                        style={{ marginBottom: '25px', marginBlockStart: "4%" }}
                                    />


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

                                    {/* <TextField
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
                                    </TextField> */}
                                    <TextField
                                        type="text"
                                        label="Gender"
                                        variant="outlined"
                                        name="gender"
                                        placeholder="Enter Gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        fullWidth
                                        style={{ marginBottom: '25px' }}
                                    />

                                    {/* <TextField
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
                                    </TextField> */}

                                    <TextField
                                        type="text"
                                        label="Job Title"
                                        variant="outlined"
                                        name="job"
                                        placeholder="Enter Job Title"
                                        value={formData.job}
                                        onChange={handleInputChange}
                                        fullWidth
                                        style={{ marginBottom: '25px' }}
                                    />

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

                                <Button
                                    variant="contained"
                                    type="submit"
                                    onClick={btnDemo}
                                    style={{
                                        marginBottom: '25px',
                                        marginLeft: '28%',
                                        fontSize: '1rem',
                                        padding: '10px 20px',
                                    }}
                                >
                                    <i class="fas fa-bookmark"></i>
                                    <span>&nbsp; <b>Demo</b></span>
                                </Button>

                                <Button
                                    startIcon={<SaveIcon />}
                                    variant="contained"
                                    type="button"
                                    onClick={onSubmit}
                                    style={{
                                        marginBottom: '25px',
                                        marginLeft: '15%',
                                        backgroundColor: 'forestgreen',
                                        color: 'white',
                                        fontSize: '1rem',
                                        padding: '10px 20px',
                                    }}
                                >
                                    Save
                                </Button>



                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    )
}

