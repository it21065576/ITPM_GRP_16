import React from 'react';
import Ima from '../../Images/children1.jpg';
import Footer from '../Footer';
import Navbar from '../Navbar';


 export default function DonatePage() {
  return (
    <>
    <div>
    <Navbar />
    </div>
  
    <img src={Ima} 
    width= "1500px"
    height="600px"
    fluid />
    <br></br>
    <br></br>
    <center><a href='/add'><button type="button" class="btn btn-primary" >Donate Now</button></a></center>

    <br></br>
    <br></br>
    <p><center>If you wish to give your valuable contribution in any anther way, Please CONTACT US</center></p>
    <br></br>
    <br></br>
    <center><button type="button" class="btn btn-primary">Contact Us</button></center>
    <br></br>
    <br></br>
    <div>
      <Footer />
    </div>
    </>
   
  
  )
}
   