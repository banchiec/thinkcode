import './App.css';
// import logo_thinkcode from './logo_thinkcode.png'
import React, {} from 'react'
import 'animate.css'
import Navbarthink from './components/Navbarthink'
import InfoSection from './components/infoSection/InfoSection'
import Pricing from './components/pricing/Pricing' 
import Footer from './components/footer/Footer'
import Slide from './components/slide/Slide'
import FormContact from './components/forms/FormContact' 
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
// import InfoSection from './components/infoSection/InfoSection';

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
        <InfoSection></InfoSection>
        <Pricing></Pricing>
        <Slide/>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
