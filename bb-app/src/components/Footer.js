import React from "react";  
import logo from '../bblogo.png'; // Tell webpack this JS file uses this image

function Footer() {
    return(
<nav class="navbar navbar-expand-lg navbar-dark">
                           <img src={logo} className="logobb" alt="Logo" />
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse menubutton" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
             <li class="nav-item active">
                <a class="nav-link" href={this}>Menu</a>
             </li>
            
             <li class="nav-item">
                <a class="nav-link " href="#">About Us</a>
             </li>

             <li class="nav-item">
                <a class="nav-link " href="https://www.doordash.com/store/bob-s-burgers-albuquerque-769726/en-US">Order on DoorDash</a>
             </li>

            <li class="nav-item">
                <a class="nav-link " href="https://www.yahoo.com">Find a Location Near You</a>
             </li>
         </ul>
        
       </div>
    </nav>


    )
}

export default Footer;