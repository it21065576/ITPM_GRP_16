import Footer from '../Footer';
import Navbar from '../Navbar';
import "../../Styles/cardDetails.css"
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

function CardDetails() {
  const [cardno, setcardno] = useState([]);
   //const [photo, setphoto] = useState([]);
   const [expiryDate, setexpiryDate] = useState([]);
   const [cvc, setcvc] = useState([]);
   const [cardOwner, setcardOwner] = useState([]);
   


  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  };

  

  //Creating new Appointment
  function sendData(s){
    s.preventDefault();

    const cardDetails = {
      cardno,
      expiryDate,
      cvc,
      cardOwner
    };
    


    // axios.post("http://localhost:8002/cardDetailsRoute/save", cardDetails).then(()=>{

    //   alert("Details successfully added",refreshPage());
    //   //console.log(newAppointment);

    // }).catch((err)=>{

    //   alert("Error: Details not added");
    //   console.log(err);

    // })

    axios.post("http://localhost:8002/cardDetailsRoute/save", cardDetails)
  .then(() => {
    alert("Details successfully added");
    refreshPage();
  })
  .catch((err) => {
    alert("Error: Details not added");
    console.log(err);
  });


 

  }

  return (
    <>
    <div>
    <Navbar />
    </div>
    <div className="container">
      <div className="page-header text-center">
      <b><center>
            <h2>Yes,I want to donate to</h2>
            <h2>support women and childern!</h2>
            <p><h6>Your donation will enable Smile Sri Lanka to provide every child and</h6> </p>
            <p><h6>women with a future and a fair chance.</h6></p></center></b>
      </div>

      
              {/* Credit Card Payment Form - START */}
      <div className="container">
        <center>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="row">
                  <h3 className="text-center">Payment Details</h3>
                  <div className="inlineimage">
                    <img
                      className="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                      alt="Mastercard"
                    />
                    <img
                      className="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                      alt="Discover"
                    />
                    <img
                      className="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                      alt="Paypal"
                    />
                    <img
                      className="img-responsive images"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                      alt="American Express"
                    />
                  </div>
                </div>
              </div>
              <div className="panel-body">
              <center>
                <form role="form" onSubmit={sendData}> 
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-group">
                        <label>CARD NUMBER</label>
                        <div className="input-group">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Valid Card Number"
                            onChange={(event)=>{
                              setcardno(event.target.value);
                          }} required
                            
                          />
                          <span className="input-group-addon">
                            <span className="fa fa-credit-card"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-7 col-md-7">
                      <div className="form-group">
                        <label>
                          <span className="hidden-xs">EXPIRATION</span>
                          <span className="visible-xs-inline">EXP</span>{' '}
                          DATE
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="MM / YY"
                          onChange={(event)=>{
                            setexpiryDate(event.target.value);
                        }} required
                        />
                      </div>
                    </div>
                    <div className="col-xs-5 col-md-5 pull-right">
                      <div className="form-group">
                        <label>CV CODE</label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="CVC"
                          onChange={(event)=>{
                            setcvc(event.target.value);
                        }} required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-group">
                        <label>CARD OWNER</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Card Owner Name"
                          onChange={(event)=>{
                            setcardOwner(event.target.value);
                        }} required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                <div className="row">
                  <div className="col-xs-12">
                  <div className="col-xs-12">
                    <button className="btn btn-success btn-lg btn-block" type="submit" >
                      Confirm Payment
                    </button>               
                  </div>
                </div>
              </div>
            </div>
                </form></center>
              </div>
           
          </div>
        </div>
      </div>
      </center>
      {/* Credit Card Payment Form - END */}
    </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
}

export default CardDetails;