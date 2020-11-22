import logo from './logo.svg';
import './App.css';
import Button  from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button className=" btn  btn-primary">send</Button>
      </header>
    </div>
  );
}

export default App;
