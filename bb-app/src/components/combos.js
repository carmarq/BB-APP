import React from "react";   //functioning react component ?? ill verify
import logo from '../bblogo.png'; // To use the image in a file

function Combo() {
    return(
<section>
	<h2>Combos</h2>
  <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Combo A</h5>
                   <p class="card-text">Ranchero Supreme Burger</p>
                   <p class="card-text">Fries, Drink.</p>
                   <p class="card-text">$5.10</p>
                </div>
             </div>
          </div>

           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Combo B</h5>
                   <p class="card-text">Old Fashioned Burger</p>
                   <p class="card-text">Fries, Drink.</p>
                   <p class="card-text">$4.75</p>
                </div>
             </div>
          </div>

           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Combo C</h5>
                   <p class="card-text">Chili Dog</p>
                   <p class="card-text">Fries, Drink.</p>
                   <p class="card-text">$4.75</p>
                </div>
             </div>
          </div>

          <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Combo D</h5>
                   <p class="card-text">2 Taco Burgers</p>
                   <p class="card-text">Fries, Drink.</p>
                   <p class="card-text">$6.85</p>
                </div>
             </div>
          </div>

           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Combo E</h5>
                   <p class="card-text">Corn Dog</p>
                   <p class="card-text">Fries, Drink.</p>
                   <p class="card-text">$7.05</p>
                </div>
             </div>
          </div>

           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Combo F</h5>
                   <p class="card-text">Chicken Nuggets</p>
                   <p class="card-text">Fries, Drink.</p>
                   <p class="card-text">$4.60</p>
                </div>
             </div>
          </div>
</section>



    )
}

export default Combo;