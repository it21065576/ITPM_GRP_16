import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import Swal from 'sweetalert2';
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import swal from 'sweetalert';


export default function EditService() {

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
    const { id } = useParams();

    const [sID, setSID] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [address, setAddress] = useState('');
    const [nic, setNIC] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [job, setJob] = useState('');
    const [position, setPosition] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8002/service/${id}`)
            .then((response) => {
                const { sID, fName, lName, address, nic, phone, email, gender, job, position } = response.data.services;
                setSID(sID);
                setFName(fName);
                setLName(lName);
                setAddress(address);
                setNIC(nic);
                setPhone(phone);
                setEmail(email);
                setGender(gender);
                setJob(job);
                setPosition(position);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const addForm = {
        sID,
        fName,
        lName,
        address,
        nic,
        phone,
        email,
        gender,
        job,
        position


    }

    //page refresh function
    function refreshPage() {
        window.location.reload(false);
    };


    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            sID,
            fName,
            lName,
            address,
            nic,
            phone,
            email,
            gender,
            job,
            position,
        };

        console.log(data)

        //validation 
        const ph = /^[0-9\b]+$/;
        const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ((!ph.test(String(phone))) || (phone.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        } else if ((!emi.test(String(email)))) {
            swal("Invalid email address !", "Please enter valid email address", "error");
        } else if (
            sID.trim() === '' ||
            fName.trim() === '' ||
            lName.trim() === '' ||
            address.trim() === '' ||
            nic.trim() === '' ||
            phone.trim() === '' ||
            email.trim() === '' ||
            gender.trim() === '' ||
            job.trim() === '' ||
            position.trim() === ''
        ) {
            swal("Please fill all the details")
        } else {

            axios.put(`http://localhost:8002/service/update/${id}`, data)
                .then((res) => {
                    let path = "/serviceDash";
                    if (res.data.success) {
                        alert("Employee Updated Successfully");
                        navigate(path);
                        setFormData({
                            sID: "",
                            fName: "",
                            lName: "",
                            address: "",
                            nic: "",
                            phone: "",
                            email: "",
                            gender: "",
                            job: "",
                            position: ""
                        });

                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

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
                                            Edit Service Provider
                                        </span>
                                    </h1>
                                </center>

                                <form className="need-validation" noValidate >


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Service ID</label>
                                        <input type="text"
                                            className="form-control"
                                            name="sID"
                                            placeholder="Enter First Name"
                                            value={sID}
                                            onChange={(event) => {
                                                setSID(event.target.value);
                                            }} required />
                                    </div>

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>First Name</label>
                                        <input type="text"
                                            className="form-control"
                                            name="fName"
                                            placeholder="Enter First Name"
                                            value={fName}
                                            onChange={(event) => {
                                                setFName(event.target.value);
                                            }} required />
                                    </div>


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Last Name</label>
                                        <input type="text"
                                            className="form-control"
                                            name="lName"
                                            placeholder="Enter Last Name"
                                            value={lName}
                                            onChange={(event) => {
                                                setLName(event.target.value);
                                            }} required />
                                    </div>


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Address</label>
                                        <input type="textarea"
                                            className="form-control"
                                            name="address"
                                            placeholder="Enter Address"
                                            value={address}
                                            onChange={(event) => {
                                                setAddress(event.target.value);
                                            }} required />
                                    </div>


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>NIC</label>
                                        <input type="text"
                                            className="form-control"
                                            name="nic"
                                            placeholder="Enter NIC no"
                                            value={nic}
                                            onChange={(event) => {
                                                setNIC(event.target.value);
                                            }} required />
                                    </div>



                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Contact Number</label>
                                        <input type="text"
                                            className="form-control"
                                            name="phone"
                                            placeholder="Enter Contact no"
                                            value={phone}
                                            onChange={(event) => {
                                                setPhone(event.target.value);
                                            }} required />
                                    </div>


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Email Address</label>
                                        <input type="textarea"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            value={email}
                                            onChange={(event) => {
                                                setEmail(event.target.value);
                                            }} required />
                                    </div>


                                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Gender</label>
                                        <select name="gender" onChange={(event) => {
                                            setGender(event.target.value);
                                        }} value={gender} defaultValue="Select Type" class="form-control">
                                            <option defaultValue>-- Select Gender --</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>


                                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Job Title</label>
                                        <select name="gender" onChange={(event) => {
                                            setJob(event.target.value);
                                        }} value={job} defaultValue="Select Type" class="form-control">
                                            <option defaultValue>-- Select Job --</option>
                                            <option value="Doctor">Doctor</option>
                                            <option value="Police">Police</option>
                                            <option value="Counsellor">Counsellor</option>
                                            <option value="Lawyer">Lawyer</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Position</label>
                                        <input type="textarea"
                                            className="form-control"
                                            name="position"
                                            placeholder="Enter Position"
                                            value={position}
                                            onChange={(event) => {
                                                setPosition(event.target.value);
                                            }} required />
                                    </div>
                                    <center>
                                        <a className="btn btn-warning btn-lg" type="submit" style={{ marginTop: '15px', marginLeft: '1%' }} onClick={onSubmit}>
                                            <i className="far fa-check-square" ></i>
                                            Update
                                        </a>
                                    </center>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}