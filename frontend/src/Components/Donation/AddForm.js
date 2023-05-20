import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import Footer from '../Footer';
import Navbar from '../Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../../Styles/addDonarForm.css";




export default function AddForm() {

   const [fName, setfName] = useState([]);
   //const [photo, setphoto] = useState([]);
   const [lName, setlName] = useState([]);
   const [address, setaddress] = useState([]);
   const [phone, setphone] = useState([]);
   const [email, setemail] = useState();
   const [amount, setamount] = useState();


  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  };

  

  //Creating new Appointment
  function sendData(s){
    s.preventDefault();

    //Creating object
    const addForm ={
        fName,
        lName,
        address,
        phone,
        email,
        amount
       
    }


    axios.post("http://localhost:8002/donation/save", addForm).then(()=>{

      alert("Details successfully added",refreshPage());
      //console.log(newAppointment);

    }).catch((err)=>{

      alert("Error: Details not added");
      console.log(err);

    })

  }

  

  return (
    
  <>
        {/* <Navbar /><center>
          <form className="addform" onSubmit={sendData}>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="fName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="fName" placeholder="Enter First Name" onChange={(event)=>{
                  setfName(event.target.value);
              }} required/> 
        </Form.Group>
       

        <Form.Group as={Col} controlId="lName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lName" placeholder="Enter Last Name"  onChange={(event)=>{
                  setlName(event.target.value);
              }} required/>
        </Form.Group>
      </Row>
          
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder=" Enter Address" onChange={(event)=>{
                  setaddress(event.target.value);
              }} required/> 
      </Form.Group> 
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder=" Enter Phone Number" onChange={(event)=>{
                  setphone(event.target.value);
              }} required/>
      </Form.Group> 

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control placeholder=" Enter Email Address" onChange={(event)=>{
                  setemail(event.target.value);
              }} required/>
      </Form.Group> 
      </Row>

          </form>

              <input  type="submit" id="saveBtn"  value="SUBMIT" class="btn btn-primary"></input>
              <br></br>
              <br></br>


        
       
        </center>
        <Footer/> */}
        <div className="main-container">

      

{/* <NavBar /> */}
<Navbar/>
<div className="body-container clearfix">

<form className="createform" onSubmit={sendData}>  
<div className="n2"><b><center>
            <h2>Yes,I want to donate to</h2>
            <h2>support women and childern!</h2>
            <p><h6>Your donation will enable Smile Sri Lanka to provide every child and</h6> </p>
            <p><h6>women with a future and a fair chance.</h6></p></center></b></div> 
<div className='projectName-container'>
      <label for="fName"><b>First Name</b></label> <br/>
      <input type="text" id="fName"  className="values"  name="fName"  
      onChange={(event)=>{
          setfName(event.target.value);
      }} required/>
      </div><br/>

      
      {/* <div className='photo-container'>
      <label for="photo"><b>Choose Images</b></label>  &nbsp;  
      <input type="file" accept=".png, .jpg, .jpeg" id="photo"   name="photo"  onChange={(event)=>{
          setphoto(event.target.value);
      }} />
      </div><br/> */}

      
      
      <div className='time-container'>
      <label for="lName"><b>Last Name</b></label> <br/>
      <input type="text" id="lName" className="values"    name="lName"  onChange={(event)=>{
          setlName(event.target.value);
      }} required/>
      </div><br/>

      
      <div className='location-container'>
      <label for="address"><b>Address:</b></label> <br/>  
      <input type="text" id="address" className="values"   name="address"  onChange={(event)=>{
          setaddress(event.target.value);
      }} required/>
      </div><br/>

      <div className='discription-container'>
      <label for="phone"><b>Phone Number:</b></label><br/> 
      <input type="text" id="phone" className="values" name="phone"  onChange={(event)=>{
          setphone(event.target.value);
      }} required/>
      </div><br/>
      <div className='discription-container'>
      <label for="email"><b>Email Address:</b></label><br/> 
      <input type="text" id="email" className="values" name="email"  onChange={(event)=>{
          setemail(event.target.value);
      }} required/>
      </div><br/>

      <div className='time-container'>
      <label for="amount"><b>Amount</b></label> <br/>
      <input type="text" id="amount" className="values"    name="amount"  onChange={(event)=>{
          setamount(event.target.value);
      }} required/>
      </div><br/>

      <a href ="/amount"><input  type="submit" id="saveBtn"  value="SUBMIT"></input></a>
      </form>
</div>





</div>
 
<Footer/>

    </>

    );
}
