import React from "react";   //functioning react component ?? ill verify


function Drink() {
    return(
 
   <section>
    <h2>Combos</h2>
    <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Combo A</h5>
                     <p className="card-text">Ranchero Supreme Burger</p>
                     <p className="card-text">Fries, Drink.</p>
                     <p className="card-text">$5.10</p>
                  </div>
               </div>
            </div>

             <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Combo B</h5>
                     <p className="card-text">Old Fashioned Burger</p>
                     <p className="card-text">Fries, Drink.</p>
                     <p className="card-text">$4.75</p>
                  </div>
               </div>
            </div>

             <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Combo C</h5>
                     <p className="card-text">Chili Dog</p>
                     <p className="card-text">Fries, Drink.</p>
                     <p className="card-text">$4.75</p>
                  </div>
               </div>
            </div>

            <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Combo D</h5>
                     <p className="card-text">2 Taco Burgers</p>
                     <p className="card-text">Fries, Drink.</p>
                     <p className="card-text">$6.85</p>
                  </div>
               </div>
            </div>

             <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Combo E</h5>
                     <p className="card-text">Corn Dog</p>
                     <p className="card-text">Fries, Drink.</p>
                     <p className="card-text">$7.05</p>
                  </div>
               </div>
            </div>

             <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Combo F</h5>
                     <p className="card-text">Chicken Nuggets</p>
                     <p className="card-text">Fries, Drink.</p>
                     <p className="card-text">$4.60</p>
                  </div>
               </div>
              </div>
    </section>
    </section>   

    )
}

export default Navbar;