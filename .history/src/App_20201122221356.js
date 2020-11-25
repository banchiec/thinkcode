import './App.css';
import logo_thinkcode from './logo_thinkcode.png'

// import Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Button, Nav, NavItem, NavLink} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar className="navbar_thinkcode" variant="dark">
        <Navbar.Brand href ="#home">
          <img
            alt=""
            src={logo_thinkcode}
            className="d-inline-block align-top ml-4"
            width="370"
            height="60"
          />{''}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink>Páginas web</NavLink>
          <NavLink>Desarrollo a medida</NavLink>
          <NavLink>Home</NavLink>
          <NavLink>Home</NavLink>
          <NavItem>Hasdfome</NavItem>
          <NavItem>Hosajlkjlkasdfme</NavItem>
        </Nav>

      </Navbar>
      

      <header className="App-header">
        <h1>thinkcode</h1>
        <Button>send up</Button>
      </header>
    </div>
  );
}

export default App;
