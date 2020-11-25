import './App.css';

import Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href ="#home">
          <img
            alt=""
            src="/logo_thincode_2opcion.jpg"
            className="d-inline-block align-top"
          />{''}
        </Navbar.Brand>
        thinkcode
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
