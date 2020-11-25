import './App.css';
import Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'
import {logo_thinkcode} from '../public/logo_thincode_2opcion.jpg'

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href ="#home">
          <img
            alt=""
            src={}
          ></img>
        </Navbar.Brand>
      </Navbar>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>thinkcode</h1>
        <Button>send up</Button>
      </header>
    </div>
  );
}

export default App;
