import React from "react";   //functioning react component ?? ill verify
import logo from '../bblogo.png'; // Tell webpack this JS file uses this image


function Navbar() {
    return(
 
 <nav class="navbar navbar-expand-lg navbar-dark">
                           <img src={logo} className="logobb" alt="Logo" />
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse menubutton" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
             <li class="nav-item active">
                <a class="nav-link" href="#">Menu</a>
             </li>
            
             <li class="nav-item">
                <a class="nav-link " href="#">About Us</a>
             </li>

             <li class="nav-item">
                <a class="nav-link " href="#">Order on DoorDash</a>
             </li>

            <li class="nav-item">
                <a class="nav-link " href="#">Find a Location Near You</a>
             </li>
         </ul>
        
       </div>
    </nav>

    )
}

export default Navbar;
