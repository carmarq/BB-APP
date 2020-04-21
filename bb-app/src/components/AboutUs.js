import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function About() {
  return (
        <section className="homeCard">
     		<div className="col-md-12">
        		<div className="card">
          			<div className="card-body">
          				<h1 className="about-us-title">About Us</h1>
            			<img src={burger} className="menu-pic" alt="Picture of Menu" />
            			<h5 className="title-header">Ranchero Burger. Try it today!</h5>
            			<a class="btn btn-danger" href="https://www.doordash.com/store/bob-s-burgers-albuquerque-769726/en-US" role="button">Order on DoorDash</a>
          			</div>
          	  	</div>
      		</div>  
     	</section>  

  );
}

export default About;
