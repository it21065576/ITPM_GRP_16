import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Creating a new recipe...

export default class feedback extends Component {

  constructor(props){
    super(props);
    this.state={
        Name:"",
        goal:"",
        here:"",
        message:""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {Name,goal,here,message} = this.state;

    const data ={
        Name:Name,
        goal:goal,
        here:here,
        message:message
    }

    console.log(data)

    // Validation 

    const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(Name.length === 0  || goal.length === 0 || here.length === 0 ||  message.length === 0 ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }
    else{

    axios.post("/feedback/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            Name:"",
        goal:"",
        here:"",
        message:""
          }
        )
      }
    });
    swal({ text: "Legal Case Type Successfully Added", icon: "success", button: "Okay!"})
  .then((value) => {
      window.location = '/viewfeedback'; // /ListCustomerRegistration
  });}
  }   


  render() {
    const { goal ,here } = this.state;
    return (
    <div>
      
      <div className style={{ backgroundColor:'#F1F1F1', backgroundSize: 'cover'}}> <br/>
      <div>
            <a href="/Profile"><img style={{width:'1600px',height:'400px'}} src=".\feedbac.jpg" href="#"></img></a>
          </div>
          <br/>
        

          <div className="container">
          <div className="row">
              <div  style={{display:'flex',justifyContent:'center'}} >
                <div style={{marginLeft:'-10px',width:'60%'}}>
                <form className="needs-validation" noValidate style={{backgroundColor: "#e6e6ff", 
          }}>
          <br/><br/>
          <center><h4>Send Your Feedback</h4></center>

          <div class="form-group" style={{marginLeft:"20px", marginRight:"20px"}} >
              <label><strong> Name :</strong></label>
              <input type="text"
              className="form-control"
              name="Name" 
              placeholder="Enter Name"
              value={this.state.Name}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",borderRadius: '12px'}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"23px", marginRight:"100px"}} >
          <label><strong>Do you Archieve your goal ?</strong></label>
          <div style={{marginLeft:"8px", marginRight:"20px"}}>
          <select value={goal} name='goal' onChange={this.handleChange}style={{width: "400px",backgroundColor: "#ffff", marginTop:"10px",borderRadius: '8px',}}>
              <option value="">Select One</option>
              <option value="Yes">Yes</option>
              <option value="Partialy">Partialy</option>
              <option value="No">No</option>
            </select>
         </div>
         </div><br/>

          <div class="form-group" style={{marginLeft:"23px", marginRight:"100px"}} >
          <label><strong>How do you Here about us ?</strong></label>
          <div style={{marginLeft:"10px", marginRight:"20px"}}>
          <select value={here} name='here' onChange={this.handleChange}style={{ width: "400px",backgroundColor: "#ffff", marginTop:"10px",borderRadius: '8px',}}>
              <option value="">Select One</option>
              <option value="Social Media">Social Media</option>
              <option value="Television">Television</option>
              <option value="Google Search Engine">Google Search Engine</option>
              <option value="Other">Other</option>
            </select>
         </div>
         </div><br/>

          <div class="form-group" style={{marginLeft:"20px", marginRight:"20px"}} >
              <label><strong>Message :</strong></label>
              <input type="text"
              className="form-control"
              name="message" 
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff",borderRadius: '12px', marginTop:"10px",}} />
          </div><br/>

          

          <div className="text-center" > 
          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>&nbsp;
          <a href="/feedBack"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
          {/* /ListCustomerRegistration */}<br/><br/>

          </div>
          <br/>
          
          </form>


                </div>
                <br/>
                <div style={{paddingLeft:'5%'}}>
                  
<div>
            <a href="/Profile"><img style={{width:'500px',height:'400px'}} src=".\fedd.jpeg" href="#"></img></a>
          </div>
               </div>
              </div>
            </div>
           
        </div>


         
          <br/>
        </div>
        </div>
    )
   }
}


