import React, { useState } from 'react';
import '../../Styles/Login.css'
import logo from '../../Images/logo.png'
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { message } from 'antd';
import Loading from '../../Components/Loading';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()
  const login = async () => {
    if (email == "" || password == "") {
      message.error("Please fill the all fields")
      return
    }
    setLoad(true)
    await axios.post('http://localhost:4000/api/users/login', { email, password }).then((val) => {
      localStorage.setItem("token", val.data.token)
      localStorage.setItem("userRole", val.data.user.role)
      localStorage.setItem("email", val.data.user.email)
      if (val.data.user.role === "admin") {
        navigate("/AdminDashboard")
      } else {
        navigate("/")
      }
    }).catch(err => {
      message.error(`${err}`)
    })
    setLoad(false)
  }


  return load ?
    <Loading />

    : <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img
                src={logo}
                style={{ width: '185px' }}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Welcome to Child Protection E Service</h4>
            </div>

            <p>      </p>


            <MDBInput wrapperClass='mb-4'

              onChange={(e) => {
                setEmail(e.target.value)
              }}
              label='Email address' id='form1' type='email' />
            <MDBInput wrapperClass='mb-4'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              label='Password' id='form2' type='password' />


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2"
                onClick={(e) => {
                  login()
                }}
              >Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot your password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">If you are new User?</p>
              <MDBBtn href="/Register" outline className='mx-2' color='danger'>
                Register
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              {/* <h4 class="mb-4">Smart farming</h4> */}
              <img
                src={logo}
                style={{ width: '480px' }}
                className="d-inline-block align-auto"
                alt="React Bootstrap logo"
              />

              <p class="small mb-0">

              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>


}

export default Login;