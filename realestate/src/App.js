import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import  About  from './Components/about';
import Services from './Components/services';
import Pricing from './Components/pricing';
import Home from './Components/home';
import { contacts } from './Components/contacts';


function App() {
  return (
    <div className="App">
     
    <Router>
    <Navbar/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/home' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/service' Component={Services}/>
          <Route path='/pricing' Component={Pricing}/>
          <Route path = '/contactus' Component={contacts}/>
        </Routes>
      
    </Router>
     
    </div>
  );
}

export default App;
