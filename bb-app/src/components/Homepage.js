import React from "react";   //functioning react component ?? ill verify
import logo from '../bblogo.png'; // Tell webpack this JS file uses this image
import burger from '../burgerhand.png'; // Tell webpack this JS file uses this image
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function Homepage = () => (
  <section>
  <section>
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
         <img src={burger} className="menu-pic" alt="Picture of Menu" />
         <h5 className="title-header">Card title</h5>
         <p className="title-text">Some text to build on the card's content.</p>
        </div>
      </div>
    </div>  
  </section>

<section>
<Router>
  <div>
    <ul>
<li>
  <Link to="Combo">Combo</Link>
</li>
<li>
  <Link to="Hamburger">Hamburger</Link>
</li>
<li>
  <Link to="Alacarte">Ala Carte</Link>
</li>
<li>
  <Link to="Hotdog">Hotdogs and Fabulous Fries</Link>
</li>
<li>
  <Link to="Breakfast">Breakfast</Link>
</li>
<li>
  <Link to="Dessert">Desserts</Link>
</li>
<li>
  <Link to="Drinks">Drinks</Link>
</li>
    </ul>
  </div>
</Router>
</section>
</section>

    );

export default Homepage;


const Combo() {
  return (
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
  );
}

function Hamburger() {
    return(
    <section>
          <h2>Hamburgers</h2>
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
    );
}

function Breakfast() {
    return(
  <section>
      <h2>Breakfast</h2>
    <div class="row text-center">
      <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                <h5 class="card-title">Bacon Burrito</h5>
                <p class="card-text">Onion Rings</p>
                <p class="card-text">Side Chile,Fries</p>
                <p class="card-text">$12.99</p>
                </div>
             </div>
          </div>

           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Sausage Burrito</h5>
                   <p class="card-text">Tortilla Burger</p>
                   <p class="card-text">Chicken Taquito Boat.</p>
                   <p class="card-text">Chips & Salsa.</p>
                   <p class="card-text">$9.75</p>
                </div>
             </div>
          </div>
         
           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Plain Burrito</h5>
                   <p class="card-text">3 Beef Taquitos.</p>
                   <p class="card-text">Side Chile,Taco.</p>
                   <p class="card-text">$10.75</p>
                </div>
             </div>
          </div>

          <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Breakfast Taco</h5>
                   <p class="card-text">Dozen Apple Bites</p>
                   <p class="card-text">3 Chicken Taquitos.</p>
                    <p class="card-text">Chips & Salsa.</p>
                   <p class="card-text">$9.85</p>
                </div>
             </div>
          </div>
          </div>


          <div class="row text-center">
           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Ranchero Hash Browns</h5>
                   <p class="card-text">Dozen Apple Bites</p>
                   <p class="card-text">Grilled Cheese Sandwich.</p>
                   <p class="card-text">3 Beef Taquitos.</p>
                   <p class="card-text">$12.05</p>
                </div>
             </div>
          </div>

           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Hash Browns Small</h5>
                   <p class="card-text">3 Beef Taquitos</p>
                   <p class="card-text">Side Red Chile</p>
                   <p class="card-text">Fries.</p>
                   <p class="card-text">$8.60</p>
                </div>
             </div>
          </div>
          
            <div class="col-md-3">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Hash Browns Large</h5>
                   <p class="card-text">Side Red Chile</p>
                   <p class="card-text">Grilled Cheese Sandwich</p>
                   <p class="card-text">Chicken Sandwich</p>
                   <p class="card-text">$9.99</p>
                </div>
             </div>
          </div>

           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Side Bacon</h5>
                   <p class="card-text">3 Chicken Taquitos</p>
                   <p class="card-text">Dozen Apple Bites.</p>
                   <p class="card-text">Tortilla Burger.</p>
                   <p class="card-text">$13.75</p>
                </div>
             </div>
          </div>
          </div>


          <div class="row text-center">
           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Side Sausage</h5>
                   <p class="card-text">Dozen Apple Bites.</p>
                   <p class="card-text">Chips & Salsa.</p>
                   <p class="card-text">Fries</p>
                   <p class="card-text">$10.05</p>
                </div>
             </div>
          </div>

          <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Side Red Chile</h5>
                   <p class="card-text">Chicken Taquito Boat</p>
                   <p class="card-text">Tortilla Burger.</p>
                    <p class="card-text">Grilled Cheese Sandwich.</p>
                   <p class="card-text">$9.85</p>
                </div>
             </div>
          </div>
          
           <div class="col-md-">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Side Green Chile</h5>
                   <p class="card-text">3 Chicken Taquitos.</p>
                   <p class="card-text">Grilled Cheese Sandwich</p>
                   <p class="card-text">3 Beef Taquitos</p>
                   <p class="card-text">$8.65</p>
                </div>
             </div>
          </div>

           <div class="col-md-4">
             <div class="card">
                <div class="card-body">
                <img src={logo} className="logobb" alt="Logo" />
                   <h5 class="card-title">Orange Juice</h5>
                   <p class="card-text">Chicken Sandwich</p>
                   <p class="card-text">3 Beef Taquitos</p>
                   <p class="card-text">Chicken Taquitos.</p>
                   <p class="card-text">$12.60</p>
                </div>
             </div>
          </div>
          </div>
</section>
    );
}

function Alacarte() {
    return(
      <section>
        <h2>Ala Carte</h2>
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
    );
}


function Hotdog() {
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
            );
}

function Dessert() {
    return(
         <section>
          <h2>Dessert</h2>
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
    );
}

function Drink() {
    return(
        <section>
          <h2>Drinks</h2>
          <div class="row text-center">
          <div class="col-md-6">
                     <div class="card">
                        <div class="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 class="card-title">Large Drinks</h5>
                           <p class="card-text">Diet Dr. Pepper,Dr Pepper</p>
                           <p class="card-text">Diet Pepsi,Pepsi</p>
                           <p class="card-text">Mug root Beer</p>
                           <p class="card-text">$2.55</p>
                        </div>
                     </div>
                  </div>

                   <div class="col-md-6">
                     <div class="card">
                        <div class="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 class="card-title">Medium Drinks</h5>
                           <p class="card-text">Diet Dr. Pepper,Dr Pepper</p>
                           <p class="card-text">Diet Pepsi,Pepsi</p>
                           <p class="card-text">Mug root Beer</p>
                           <p class="card-text">$2.29</p>
                        </div>
                     </div>
                  </div>
                  </div>

                  <div class="row text-center">
                   <div class="col-md-6">
                     <div class="card">
                        <div class="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 class="card-title">Small Drinks</h5>
                           <p class="card-text">Diet Dr. Pepper,Dr Pepper</p>
                           <p class="card-text">Diet Pepsi,Pepsi</p>
                           <p class="card-text">Mug root Beer</p>
                           <p class="card-text">$1.95</p>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-6">
                     <div class="card">
                        <div class="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 class="card-title">Apple Bites</h5>
                           <p class="card-text">Bite-sized pastry with apple.</p>
                           <p class="card-text">Dozen Apple Bites.</p>
                            <p class="card-text">Bottled Water.</p>
                           <p class="card-text">$7.85</p>
                        </div>
                     </div>
                  </div>
                  </div>
        </section>
    );
}
