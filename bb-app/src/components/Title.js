import React from "react";   //functioning react component ?? ill verify
import burger from '../burger.jpg'; // Tell webpack this JS file uses this image
import "bootstrap/dist/css/bootstrap.css";

function Title() {
    return(
 <div class="col-md-12">
             <div class="card">
                <div class="card-body">
                   <img src={burger} className="menu-pic" alt="Picture of Menu" />
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some text to build on the card's content.</p>
                </div>
             </div>
          </div>    
    )
}



export default Title;