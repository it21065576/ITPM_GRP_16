import React from 'react';
import Logo from '../Images/logo.png';


function Navbar (){
return (
   <>

<nav>

  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    
  <a class="navbar-brand" href="#">
      <img src={Logo} alt="Bootstrap" width="100" height="60"/>
    </a>
    <button class="nav-link " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">HOME</button>
    <button class="nav-link" id="nav-service-tab" data-bs-toggle="tab" data-bs-target="#nav-service" type="button" role="tab" aria-controls="nav-service" aria-selected="false">SERVICES</button>
    <button class="nav-link active" id="nav-donation-tab" data-bs-toggle="tab" data-bs-target="#nav-donation" type="button" role="tab" aria-controls="nav-donation" aria-selected="false">DONATE</button>
    <button class="nav-link" id="nav-contacus-tab" data-bs-toggle="tab" data-bs-target="#nav-contacus" type="button" role="tab" aria-controls="nav-contacus" aria-selected="false" >CONTACT US</button>

    {/* <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul> */}
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-service" role="tabpanel" aria-labelledby="nav-service-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-donation" role="tabpanel" aria-labelledby="nav-donation-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-contacus" role="tabpanel" aria-labelledby="nav-contacus-tab" tabindex="0">...</div>
</div>

    


</>)
}

export default Navbar