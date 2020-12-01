import './App.css';
// import logo_thinkcode from './logo_thinkcode.png'
import React, {} from 'react'
import Navbarthink from './components/Navbarthink'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import Button  from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import {Navbar,Button, Nav , NavLink} from 'react-bootstrap'

import Consulting from './components/pages/Consulting'
import ContactUs from './components/pages/ContactUs'
import Home from './components/pages/Home'
import Marketing from './components/pages/Marketing'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'

function App() {

  // const [click, setClick] = useState(false)
  // const [dropdown, setDropdown] = useState(false)

  


  return (
    <div className="App">
      <Router>
        <Navbarthink/>
        <Switch>
          <Route path='/consulting' exact component ={Consulting}></Route>
          <Route path='/contact-us' exact component ={ContactUs}></Route>
          <Route path='/' exact component ={Home}></Route>
          <Route path='/marketing' exact component ={Marketing}></Route>
          <Route path='/products' exact component ={Products}></Route>
          <Route path='/services' exact component ={Services}></Route>
          <Route path='/sign-up' exact component ={SignUp}></Route>
        </Switch>
      </Router>

      {/* <Navbar className="navbar_thinkcode "  expand="lg">
        <Navbar.Brand href ="#home">
          <img
            alt=""
            src={logo_thinkcode}
            className="d-inline-block align-top ml-4"
            width="320"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ></Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="ml-5 ">
          <Nav className="collapse navbar-collapse">
            <NavLink className="enlace_navbar ">Páginas web</NavLink>
            <NavLink className="enlace_navbar">Desarrollo a medida</NavLink>
            <NavLink className="enlace_navbar">Portafolio</NavLink>
            <NavLink className="enlace_navbar">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Button variant="success">¿Hablamos?</Button>
      </Navbar> */}

      {/* <header className="App-header">
        <h1>thinkcode</h1>
        <Button>send up</Button>
      </header> */}
    </div>
  );
}

export default App;
