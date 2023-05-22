import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import Footer from '../Footer';
import Navbar from '../Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../../Styles/addDonarForm.css"



export default function AddForm() {
  
  const navigate = useNavigate();
  const { id } = useParams();

   const [fName, setfName] = useState([]);
   //const [photo, setphoto] = useState([]);
   const [lName, setlName] = useState([]);
   const [address, setaddress] = useState([]);
   const [phone, setphone] = useState([]);
   const [email, setemail] = useState();
   const [amount, setamount] = useState();

   useEffect(()=>{
    axios.get(`http://localhost:8002/donation/`+id)
      .then((getData)=>{
          
        setfName(getData.data.donations.fName);
        setlName(getData.data.donations.lName);
        setaddress(getData.data.donations.address);
        setphone(getData.data.donations.phone);
        setemail(getData.data.donations.email);
        setamount(getData.data.donations.amount);
          
      })
  },[])

  const addForm ={
    fName,
    lName,
    address,
    phone,
    email,
    amount
   
}


  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  };

  


  

  const sendDataToAPI =()=>{
    const data = {fName,lName,address,phone,email}
    axios.put(`http://localhost:8002/donation/update/${id}`,addForm)
    .then((res)=>{
        alert("Update Successfull");  
         navigate(-1);   
    })
    .catch((err)=>{
        alert("Update Unsuccessfull");
    })
}

  

  return (
    
  <>
        
        <div className="main-container">

      
<Navbar/>
<div className="body-container clearfix">

<form className="createform" >  
<div className="n2"><b><center>
            <h2>Yes,I want to donate to</h2>
            <h2>support women and childern!</h2>
            <p><h6>Your donation will enable Smile Sri Lanka to provide every child and</h6> </p>
            <p><h6>women with a future and a fair chance.</h6></p></center></b></div> 
<div className='projectName-container'>
      <label for="fName">First Name</label> <br/>
      <input type="text" id="fName"  className="values" value = {fName} name="fName"  
      onChange={(event)=>{
          setfName(event.target.value);
      }} required/>
      </div><br/>   
      
      <div className='time-container'>
      <label for="lName">Last Name</label> <br/>
      <input type="text" id="lName" className="values"  value = {lName}  name="lName" 
      onChange={(event)=>{
          setlName(event.target.value);
      }} required/>
      </div><br/>

      
      <div className='location-container'>
      <label for="address">Address</label> <br/>  
      <input type="text" id="address" className="values"  value = {address} name="address"  onChange={(event)=>{
          setaddress(event.target.value);
      }} required/>
      </div><br/>

      <div className='discription-container'>
      <label for="phone">Phone Number</label><br/> 
      <input type="text" id="phone" className="values" value = {phone} name="phone"  onChange={(event)=>{
          setphone(event.target.value);
      }} required/>
      </div><br/>
      <div className='discription-container'>
      <label for="email">Email Address</label><br/> 
      <input type="text" id="email" className="values" value = {email} name="email"  onChange={(event)=>{
          setemail(event.target.value);
      }} required/>
      </div><br/>

      <div className='time-container'>
      <label for="amount"><b>Amount</b></label> <br/>
      <input type="text" id="amount" className="values"  value = {amount}  name="amount"  onChange={(event)=>{
          setamount(event.target.value);
      }} required/>
      </div><br/>
      
<button className="sbtn2" type="submit" id="myBtn2" style={{marginTop:'1px'}} onClick={sendDataToAPI}>
                                <i className="far fa-check-square"></i>
                                &nbsp; EDIT DETAILS
                            </button>
                            <br/>
                            <br/>
                            <a href="/amount">
          <button type="button" className="btn btn-primary">
            Back
          </button>
          </a>                   
     
      </form>
    
</div>




</div>

 
<Footer/>

    </>

    );
}
