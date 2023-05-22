import React from 'react'
import '../Styles/footer.css'
import logo from '../Images/logo.png'
import { SocialIcon } from 'react-social-icons';
import LocationOn from '@mui/icons-material/LocationOn';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import { Link } from 'react-router-dom';




function Footer() {
  return (
  <>
    <div className='row footer'>
      <div class='column about'>
      <div className='h3'>
      <Link to="../Pages/Home.js">
        <img src = {logo}  width  = '100px' style={{  marginTop: 20  }} alt =''/>
        </Link>
      </div>
        <p>
        We all have the power to stop child abuse
        </p>

       <div class='social'>
          <SocialIcon  network="facebook" bgColor="#4267B2" fgColor="#ffffff" style={{ height: 35, width: 35, marginRight: 20 } } />
          <SocialIcon network="instagram" bgColor="#E1306C" style={{ height: 35, width: 35, marginRight: 20  }} />
          <SocialIcon network="twitter" fgColor="#ffffff"  style={{ height: 35, width: 35 , marginRight: 20 }} />
          <SocialIcon network="youtube"  fgColor="#ffffff" bgColor="#FF0000" style={{ height: 35, width: 35  , marginRight: 20}} />
          <SocialIcon network="whatsapp"  bgColor="#25D366" style={{ height: 35, width: 35 , marginRight: 20}} />
          
        </div>
      </div>

      <div class="column links">
        <h3 style={{  marginTop: 20  }}>Links</h3>
      <ul>

       <li>
         <a href="#cookies-policy">Cookies Policy</a>
       </li>
      <li>
        <a href="#terms-of-services">Terms Of Service</a>
      </li>
      <li>
        <a href="#support">Support</a>
       </li>
      </ul>

      </div>

      <div class="column pages">
        <h3 style={{  marginTop: 20  }}>Pages</h3>
        <ul>
       <li>
         <a href="#faq">Home</a>
        </li>
       <li>
         <a href="#cookies-policy">Gallery</a>
       </li>
      <li>
        <a href="#terms-of-services">About Us</a>
      </li>
      <li>
        <a href="#support">Contact Us</a>
       </li>
      </ul>
      </div>

      <div class="column contactus">
        <h3 style={{  marginTop: 20  }}>Contact Us</h3>
        <p class="h6">
        <LocationOn style={{ color: "white", height:25, width:25, marginRight: 15}}  ></LocationOn>
        No:47/9,Rajakeeya Mawatha,Colombo 07,Sri Lanka</p>
        <p class="h6">
        <PhoneSharpIcon style={{ color: "white", height:25, width:25, marginRight: 15 }}></PhoneSharpIcon>
        0112 345 124
        0112 345 125
        </p>

        <p class="h6">
        <EmailSharpIcon style={{ color: "white", height:25, width:25, marginRight: 15 }}></EmailSharpIcon>
        smile@gmail.com</p>
        
        
      </div>
      
    </div>

    <div class='row copyright'>
        <p>Copyright &copy; Smile_ITPM_2023</p>
      </div>
      </>  
  )
}

export default Footer