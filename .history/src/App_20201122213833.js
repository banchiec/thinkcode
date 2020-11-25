import './App.css';
import logo_thinkcode from './logo_thinkcode.png'

// import Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Button, Nav} from 'react-bootstrap'

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
          <Nav.link>Home</Nav.link>
          <Nav.link>Product</Nav.link>
          <Nav.link>Contact</Nav.link>
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
