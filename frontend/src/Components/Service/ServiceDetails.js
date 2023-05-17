import React, { Component } from 'react';
import axios from 'axios';
// import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';

export default class ServiceDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            service: {}
        };
    }

    componentDidMount() {
        console.log("hello");

        const id = this.props.match.params.id;

        axios.get(`../../../../backend/routes/Service/ServiceRoute/service/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    service: res.data.service
                });

                console.log(this.state.service);
            }
        });
    }

    render() {

        const { fName, lName, address, nic, phone, email, gender, job, position } = this.state.service;


        return (
            <>
                {/* <Navbar /> */}
                <div className="order_bground" style={{ zIndex: 98, height: "100vh" }} >

                    <div style={{ marginBlockStart: '9%', marginLeft: '15%' }}>
                        <div class="card" style={{ width: '50%', height: '925px', borderBlockColor: 'black', borderBlockWidth: '4px', borderBlockStartStyle: 'groove' }}>
                            <div class="card-body">
                                <div className="container" style={{ margingTop: '20px' }}>
                                    <br></br>

                                    <h3>Service Provider Details</h3><br></br>
                                    {/* <h4>Service ID : {#}</h4><br></br> */}

                                    <form>

                                        <label>FirstName</label>
                                        <input className="form-control" type="text" placeholder={fName} aria-label="Disabled input example" disabled></input>

                                        <label>LastName</label>
                                        <input className="form-control" type="text" placeholder={lName} aria-label="Disabled input example" disabled></input>

                                        <label>Address</label>
                                        <input className="form-control" type="text" placeholder={address} aria-label="Disabled input example" disabled></input>

                                        <label>NIC</label>
                                        <input className="form-control" type="text" placeholder={nic} aria-label="Disabled input example" disabled></input>

                                        <label>Phone</label>
                                        <input className="form-control" type="text" placeholder={phone} aria-label="Disabled input example" disabled></input>

                                        <label>Email</label>
                                        <input className="form-control" type="text" placeholder={email} aria-label="Disabled input example" disabled></input>

                                        <label>Gender</label>
                                        <input className="form-control" type="text" placeholder={gender} aria-label="Disabled input example" disabled></input>

                                        <label>Job Title</label>
                                        <input className="form-control" type="text" placeholder={job} aria-label="Disabled input example" disabled></input>

                                        <label>Position</label>
                                        <input className="form-control" type="text" placeholder={position} aria-label="Disabled input example" disabled></input>

                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </>
        )
    }
}