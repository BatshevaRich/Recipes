import React from 'react';
import './App.css';
import Home from './home/Home'
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'
function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Title></Title>
  //     </header>
  //   </div>
  // );
  return (
    <HashRouter>
      <Nav bg="light" expand="lg" class="navbar-inverse">
        <ul className="header">
          <Navbar.Brand style={{color:'white'}} href="#home">Recipes</Navbar.Brand>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </Nav>
      <div className="content">
        <Route path="/home" exact component={Home} />
        {/* <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} /> */}
      </div>
    </HashRouter>
  )
}

export default App;
