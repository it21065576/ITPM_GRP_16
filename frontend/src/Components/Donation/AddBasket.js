import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Image from '../../Images/image1.jpg'
import "../../Styles/addBasket.css"

 function AddBasket() {
  return (
    <>
    <div>
    <Navbar />
    </div>
    <div>
        <center>
            <h1>Yes,I want to donate to</h1>
            <h1>support women and childern!</h1>
            <p>Your donation will enable Smile Sri Lanka to provide every child and </p>
            <p>women with a future and a fair chance.</p>

            
        </center>
        <img className='imageab'
            src={Image}
           
        />
        <div className='children'>
          <h2>Children & Women Fund</h2>
        </div>
    </div>
    <div>
      <Footer />
    </div>
    </>
   
  
  )
}
export default AddBasket