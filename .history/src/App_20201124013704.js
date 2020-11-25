import './App.css';
import logo_thinkcode from './logo_thinkcode.png'

import Navbarthink from './components/Navbarthink'
import {BrowserRouter as Router} from

// import Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Button, Nav , NavLink} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar className="navbar_thinkcode "  expand="lg">
        <Navbar.Brand href ="#home">
          <img
            alt=""
            src={logo_thinkcode}
            className="d-inline-block align-top ml-4"
            width="320"
            height="50"
          />{''}
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
        {/* <Button variant="success">¿Hablamos?</Button> */}
      </Navbar>
      

      <header className="App-header">
        <h1>thinkcode</h1>
        <Button>send up</Button>
        <Router>
          <Navbarthink></Navbarthink>
        </Router>
      </header>
    </div>
  );
}

export default App;
