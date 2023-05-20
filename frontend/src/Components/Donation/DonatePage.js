import React from 'react';
import Ima from '../../Images/children1.jpg';
import Footer from '../Footer';
import Navbar from '../Navbar';
import "../../Styles/donationPage.css";

export default function DonatePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <img src={Ima} width="1300px" height="600px" alt="Children" fluid />
      <br />
      <br />
      <center>
        <a href="/addForm">
          <button type="button" className="btn btn-primary">
            DONATE NOW
          </button>
        </a>
      </center>
      <br />
      <br />
      <p>
        <center><b>
          If you wish to give your valuable contribution in any another way,
          Please CONTACT US
          </b>
        </center>
      </p>
      <br />
      <center>
        <button type="button" className="btn btn-primary">
          Contact Us
        </button>
      </center>
      
      

      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="card">
          <div className="img-container position-relative w-100 h-100">
            <img
              src="https://th.bing.com/th/id/R.96936f54901baecd180cd7db15a54ecb?rik=EPwXyJiUUljYLQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_UZImdYAiry8%2fTL1hHxoG01I%2fAAAAAAAAUyc%2fS50SaevmD90%2fs1600%2fhsbc-logo.jpg&ehk=Y8ZCdYZXWFIiU9lliZFmxL1g1oUTnKDRBMcdv1mdGTE%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/R.96936f54901baecd180cd7db15a54ecb?rik=EPwXyJiUUljYLQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_UZImdYAiry8%2fTL1hHxoG01I%2fAAAAAAAAUyc%2fS50SaevmD90%2fs1600%2fhsbc-logo.jpg&ehk=Y8ZCdYZXWFIiU9lliZFmxL1g1oUTnKDRBMcdv1mdGTE%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <div className="box w-100 h-100 position-absolute d-flex align-items-center justify-content-center">
            <div className="inner-content d-flex flex-column align-content-center justify-content-center">
              <div className="h2 m-0 text-center">Bank Transfer</div>
              <div className="tag text-center">
                Bank Details{' '}
                <span className="fas fa-heart text-danger"></span>
              </div>
              <p className="px-3 mt-3 text-center" >
                Bank : HSBC
                <br/>
                Account Name : Smile Foundation
                <br/>
                Account No : 122 212 121 212
                <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <Footer />
      </div>
    </>
  );
}
