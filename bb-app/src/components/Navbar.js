import React, { Component } from 'react';
import logo from '../bblogo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import burger from '../burgerhand.png'; 



import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";




export default function Navbar() {
  return (

    <Router>
      <header className="navbar-header">
        <img src={logo} className="navLogo " alt="Logo" />
          <nav className='bb-nav'>
            <ul className="navbar-list">
              <li className="nav-item active homepageList">
                <NavLink to="/Homepage" className="nav-link homeLink">Menu</NavLink>
              </li>
              <li className="nav-item aboutusList">
                <NavLink to="/About" className="nav-link aboutLink">About Us</NavLink>
              </li>
            </ul>

        <hr />
        
            <Switch>
              <Route path="/About">
                <About />
              </Route>   

              <Route exact path="/Homepage">
                <Homepage />
              </Route>   

              <Route exact path="/">
                <Homepage />
              </Route>     
            </Switch>

          </nav>
      </header>
    </Router>
          );
}



const Homepage = () => (
  <section>
    <section className="homeCard">
      <div className="col-md-12 home-outer">
        <div className="card">
          <div className="card-body home-body">
            <h5 className="title-header">Ranchero Burger. Try it today!</h5>
            <a class="btn btn-danger" href="https://www.doordash.com/store/bob-s-burgers-albuquerque-769726/en-US" role="button">Order on DoorDash</a>
          </div>
 <div>
  <Router>
      <div>
        <ul className="list-group list-group-flush">
         <li className="comboList">
          <Link to="/Combo" className="list-group-item list-group-item-action comboLink">Combos</Link>
        </li>
        <li className="hamburgerList">
          <Link to="/Hamburger" className="list-group-item list-group-item-action hamburgerLink">Hamburgers</Link>
        </li>
        <li className="alacarteList">
          <Link to="/Alacarte" className="list-group-item list-group-item-action alacarteLink">Ala Carte</Link>
        </li>
        <li className="hotdogList">
          <Link to="/Hotdog" className="list-group-item list-group-item-action hotdogLink">Hotdogs and Fabulous Fries</Link>
        </li>
        <li className="breakfastList">
          <Link to="/Breakfast" className="list-group-item list-group-item-action breakfastLink">Breakfast</Link>
        </li>
        <li className="dessertList">
          <Link to="/Dessert" className="list-group-item list-group-item-action dessertLink">Desserts</Link>
        </li>
        <li className="drinkList">
          <Link to="/Drink" className="list-group-item list-group-item-action drinkLink">Drinks</Link>
        </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>

          <Route exact path="/Combo">
            <Combo />
          </Route>

          <Route path="/Hamburger">
            <Hamburger />
          </Route>

           <Route path="/Alacarte">
            <Alacarte />
          </Route>

          <Route path="/Hotdog">
            <Hotdog />
          </Route>

           <Route path="/Breakfast">
            <Breakfast />
          </Route>

          <Route path="/Dessert">
            <Dessert />
          </Route>

           <Route path="/Drink">
            <Drink />
          </Route>

          <Route path="/">
          <Combo />
          </Route>
          
        </Switch>
      </div>
    </Router>


          </div>
        </div>
      </div>  
     </section>  
  </section>
    );



function Combo() {
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
                           <h5 className="card-title">Ranchero Supreme Burger</h5>
                           <p className="card-text">Green chile, cheese, lettuce, tomato.</p>
                           <p className="card-text">$3.65</p>
                        </div>
                     </div>
                  </div>

                   <div className="col-md-4">
                     <div className="card">
                        <div className="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 className="card-title">Ranchro Burger</h5>
                           <p className="card-text">Green chile only.</p>
                           <p className="card-text">$2.99</p>
                        </div>
                     </div>
                  </div>

                   <div className="col-md-4">
                     <div className="card">
                        <div className="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 className="card-title">Old Fashioned Burger</h5>
                           <p className="card-text">Mustard, pickle, onion, lettuce, tomato.</p>
                           <p className="card-text">$2.99</p>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-4">
                     <div className="card">
                        <div className="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 className="card-title">Red Chile Only Burger</h5>
                           <p className="card-text">$6.85</p>
                        </div>
                     </div>
                  </div>

                   <div className="col-md-4">
                     <div className="card">
                        <div className="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 className="card-title">Bobs Double Bacon Burger</h5>
                           <p className="card-text">Bacon, mustard, pickle, onion, lettuce, tomato.</p>
                           <p className="card-text">$4.29</p>
                        </div>
                     </div>
                  </div>

                   <div className="col-md-4">
                     <div className="card">
                        <div className="card-body">
                        <img src={logo} className="logobb" alt="Logo" />
                           <h5 className="card-title">Patty Melt Burger</h5>
                           <p className="card-text">$5.09</p>
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
                         <h5 className="card-title">Taco Burger</h5>
                         <p className="card-text">$2.55</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Tortilla Burger</h5>
                         <p className="card-text">$2.79</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">3 Beef Taquitos</h5>
                         <p className="card-text">$3.35</p>
                      </div>
                   </div>
                </div>

                <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <p className="card-text">Beef Taquito Boat</p>
                         <p className="card-text">$4.25</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Beef Taquito Dozen</h5>
                         <p className="card-text">$11.89</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">3 Chicken Taquitos</h5>
                         <p className="card-text">$3.65</p>
                      </div>
                   </div>
                  </div>

                   <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Chicken Taquito Boat</h5>
                         <p className="card-text">$4.35</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Chicken Taquito Dozen</h5>
                         <p className="card-text">$4.75</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Chicken Nuggets</h5>
                         <p className="card-text">$2.40</p>
                      </div>
                   </div>
                </div>

                <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Quesadilla</h5>
                         <p className="card-text">$3.59</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Chicken Sandwich</h5>
                         <p className="card-text">$4.99</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Combo F</h5>
                         <p className="card-text">Grilled Cheese Sandwich</p>
                         <p className="card-text">$2.79</p>
                      </div>
                   </div>
                  </div>


                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Frito Pie</h5>
                         <p className="card-text">$2.85</p>
                      </div>
                   </div>
                </div>

                 <div className="col-md-4">
                   <div className="card">
                      <div className="card-body">
                      <img src={logo} className="logobb" alt="Logo" />
                         <h5 className="card-title">Chips & Salsa</h5>
                         <p className="card-text">$1.29</p>
                      </div>
                   </div>
                  </div>
        </section>
    );
}


function Hotdog() {
    return(
    <section>
        <h2>Hotdog</h2>
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
          <h2>Desserts</h2>
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
    <h6>Small - $1.95 || Medium - $2.29 || Large - $2.55</h6>
    <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Pepsi</h5>
                  </div>
               </div>
            </div>

             <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Diet Pepsi</h5>
                     
                  </div>
               </div>
            </div>

             <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Dr. Pepper</h5>
                  </div>
               </div>
            </div>

            <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Diet Dr. Pepper</h5>
                  </div>
               </div>
            </div>

             <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Mug Root Beer</h5>
                  </div>
               </div>
            </div>

             <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                  <img src={logo} className="logobb" alt="Logo" />
                     <h5 className="card-title">Bottled Water</h5>
                  </div>
               </div>
              </div>
    </section>
    );
}


function About() {
  return (
    <section className="homeCard">
        <div className="col-md-12">
            <div className="card">
                <div className="card-body about-body">
                  <h1 className="about-us-title">About Us</h1>
                  <img src={burger} className="menu-pic" alt="Picture of Menu" />
                  <h5 className="title-header">Mission Statement</h5>
                  <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero nisl, fermentum eu suscipit eget, ornare maximus metus. Donec vulputate sit amet leo sed semper. Phasellus nec lacus commodo, eleifend tortor vel, tempor turpis. Etiam in metus posuere, iaculis tellus id, fermentum massa. In mauris diam, condimentum non rhoncus in, ornare molestie est. Donec tempor rutrum dolor at efficitur. Donec et eros tempus sapien congue pellentesque et eget dolor. In id lectus sit amet lacus dapibus porta interdum pharetra augue. Vivamus pharetra magna et lectus molestie, sed consequat nulla cursus. Duis auctor tincidunt diam sit amet fringilla. Fusce a felis molestie sem consequat elementum sed nec metus.
                  </p>
                  <br/>
                  <p>  
                    Aenean eget ante quam. Maecenas ac tincidunt enim, in pretium nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque gravida semper lectus, vitae vulputate ex mollis tincidunt. In dignissim efficitur finibus. Vivamus tempus, nulla sed ornare luctus, lorem urna varius metus, ut semper dolor mauris a metus. Vestibulum et orci a sem congue euismod. In tincidunt facilisis nisi sit amet accumsan. In lobortis nisi quis placerat tempor. Donec accumsan nisl id ex efficitur cursus sit amet ut velit. Integer faucibus sem sit amet orci sagittis, et luctus metus cursus. Mauris fermentum quis erat quis dictum. Fusce vel ipsum vel purus porttitor sodales non quis quam.
                  </p>
                  <br/>
                  <p>
                    Sed laoreet aliquet ipsum, sed commodo nulla volutpat in. Integer consequat nibh ante, non rhoncus tellus fermentum a. Aenean a augue ipsum. Vestibulum convallis ligula vitae nibh lacinia, nec congue lacus dignissim.
                  </p>
                </div>
                </div>
          </div>  
      </section> 
  );
}








