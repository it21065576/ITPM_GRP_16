import "./topbar.css"

export default function TopBar() {
 return (
    <div className="top">
      <div className="topLeft">
      <i class="topIcon fa-brands fa-facebook-square"></i>
      <i class="topIcon fa-brands fa-square-twitter"></i>
      <i class="topIcon fa-brands fa-square-instagram"></i>
      <i class="topIcon fa-solid fa-envelope"></i>
     
      </div>
      <div className="topCenter">
        <ul className="tpoList">
            <li className="topListItem">Home</li>    
            <li className="topListItem">About</li>    
            <li className="topListItem">Contact</li>    
            <li className="topListItem">Write</li>  
            <li className="topListItem">Login</li>                   


        </ul>

      </div>
      <div className="topRight">
        
        <img 
        className="topImg" 
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw3ytJ3-JFUZjG8KKN-SwZXV&ust=1683840892647000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjG0bPa6_4CFQAAAAAdAAAAABAE"
        alt=""
        
        />
       <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

         </div>


    </div>
  )
}
//13% WATCHEDDDDDDDDDDDDDDDD