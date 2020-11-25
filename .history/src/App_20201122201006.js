import './App.css';
import Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {navbar} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>thinkcode</h1>
        <navbar bg="primary" variant="dark"></navbar>
        <Button>send up</Button>
      </header>
    </div>
  );
}

export default App;
