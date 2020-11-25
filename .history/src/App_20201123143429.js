import './App.css';
import logo_thinkcode from './logo_thinkcode.png'

// import Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Button, Nav , NavLink} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar className="navbar_thinkcode"  expand="lg" variant="dark">
        <Navbar.Brand href ="#home">
          <img
            alt=""
            src={logo_thinkcode}
            className="d-inline-block align-top ml-4"
            width="370"
            height="60"
          />{''}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="collapse navbar-collapse">
            <NavLink className="enlace_navbar ">Páginas web</NavLink>
            <NavLink className="enlace_navbar">Desarrollo a medida</NavLink>
            <NavLink className="enlace_navbar">Portafolio</NavLink>
            <NavLink className="enlace_navbar">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Button>¿Hablamos?</Button>
      </Navbar>
      

      <header className="App-header">
        <h1>thinkcode</h1>
        <Button>send up</Button>
      </header>
    </div>
  );
}

export default App;
