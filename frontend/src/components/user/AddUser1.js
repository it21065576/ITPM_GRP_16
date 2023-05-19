import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Creating a new recipe...

export default class AddUser1 extends Component {

  constructor(props){
    super(props);
    this.state={
        name:"",
        address:"",
        gender:"",
        age:"",
        email:"",
        con_no:"",
        service_type:"",
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

    const {name,address,gender,age,email,con_no,service_type,message} = this.state;

    const data ={
        name:name,
        address:address,
        gender:gender,
        age:age,
        email:email,
        con_no:con_no,
        service_type:service_type,
        message:message
    }

    console.log(data)

    // Validation 

    const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(name.length === 0  || address.length === 0 || gender.length === 0 || age.length === 0 || email.length === 0  || con_no.length === 0 || service_type.length === 0 || message.length === 0 ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else if(name.length < 4 ){
      swal("Invalid User Name !", "Length shuld be greater than 4 !", "error");
    }
    else{

    axios.post("/user/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            name:"",
        address:"",
        gender:"",
        age:"",
        email:"",
        con_no:"",
        service_type:"",
        message:""
          }
        )
      }
    });
    swal({ text: "Legal Case Type Successfully Added", icon: "success", button: "Okay!"})
  .then((value) => {
      window.location = '/viewUser'; // /ListCustomerRegistration
  });}
  }   


  render() {
    const { service_type ,gender } = this.state;
    return (
    <div>
      
      <div className style={{ backgroundColor:'#F1F1F1', backgroundSize: 'cover'}}> <br/>
      <div>
            <a href="/Profile"><img style={{width:'1600px',height:'400px'}} src=".\rrrr.webp" href="#"></img></a>
          </div>
          <br/>
        

          <div className="container">
          <div className="row">
              <div  style={{display:'flex',justifyContent:'center'}} >
                <div style={{marginLeft:'-10px',width:'60%'}}>
                <form className="needs-validation" noValidate style={{backgroundColor: "#e6e6ff", 
          }}>
          <br/><br/>
          <center><h4>INQUIRE NOW</h4></center>

          <div class="form-group" style={{marginLeft:"20px", marginRight:"20px"}} >
              <label><strong> Name :</strong></label>
              <input type="text"
              className="form-control"
              name="name" 
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",borderRadius: '12px'}} />
          </div><br/>


          <div class="form-group" style={{marginLeft:"20px", marginRight:"20px"}} >
              <label><strong>Address :</strong></label>
              <input type="text"
              className="form-control"
              name="address" 
              placeholder="Enter Address"
              value={this.state.address}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff",borderRadius: '12px', marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"23px", marginRight:"100px"}} >
          <label><strong>Gender :</strong></label>
          <div style={{marginLeft:"8px", marginRight:"20px"}}>
          <select value={gender} name='gender' onChange={this.handleChange}style={{width: "400px",backgroundColor: "#ffff", marginTop:"10px",borderRadius: '8px',}}>
              <option value="">Select Service Type</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
         </div>
         </div><br/>

          <div class="form-group" style={{marginLeft:"20px", marginRight:"20px"}} >
              <label><strong>Age :</strong></label>
              <input type="number"
              className="form-control"
              name="age" 
              placeholder="Enter Age"
              value={this.state.age}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff",borderRadius: '12px', marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"20px", marginRight:"20px"}} >
              <label><strong>Email :</strong></label>
              <input type="text"
              className="form-control"
              name="email" 
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff",borderRadius: '12px', marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"20px", marginRight:"20px"}} >
              <label><strong>Contact Number :</strong></label>
              <input type="text"
              className="form-control"
              name="con_no" 
              maxlength = "10"
              placeholder="Enter Contact Number"
              value={this.state.con_no}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff",borderRadius: '12px', marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"23px", marginRight:"100px"}} >
          <label><strong>Service Type :</strong></label>
          <div style={{marginLeft:"10px", marginRight:"20px"}}>
          <select value={service_type} name='service_type' onChange={this.handleChange}style={{ width: "400px",backgroundColor: "#ffff", marginTop:"10px",borderRadius: '8px',}}>
              <option value="">Select Service Type</option>
              <option value="Psychosocial Service">Psychosocial Service</option>
              <option value="Medical Service">Medical Service</option>
              <option value="Legal Service">Legal Service</option>
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
          <a href="/Account_Details"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
          {/* /ListCustomerRegistration */}<br/><br/>

          </div>
          <br/>
          
          </form>


                </div>
                <br/>
                <div style={{paddingLeft:'5%'}}>
                  <br/>
                  <br/>
                  <br/>

                <h2>1929 Call Help Center </h2><p>

<strong>“1929”</strong> can be contacted free of charge through any telecom provider, from anywhere in the country, at any time of the day, any day of the week, in Sinhala / Tamil / English languages.

Founded under Act 50 of 1998, the National Child Protection Authority (NCPA) is the modal institute for child protection services in Sri Lanka, which comes under the purview of the Ministry of Child Development and Women’s Affairs (MOCDWA).

The 24 hour Childline, which was initiated at the National Child Protection Authority in July 2010, addressing one of the key requirements in the field of child protection, now plays a cardinal role in serving towards the protection of the nation’s children. 1929 responds not only to the emergency needs of children, but also links them to appropriate services ensuring their long-term care and rehabilitation
</p>
<br/>
<br/>
<div>
            <a href="/Profile"><img style={{width:'800px',height:'500px'}} src=".\esdrtfgyuhijk.jpeg" href="#"></img></a>
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


