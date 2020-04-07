import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap-carousel';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Title />  
       
      </header>
    </div>
  );
}

export default App;
