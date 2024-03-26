import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/navbar';
import  About  from './Components/about';
import Services from './Components/services';
import Pricing from './Components/pricing'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
      
        <Switch>
          <Route exact path='/' Component={About}/>
          <Route path='/about' Component={About}/>
          <Route path='/service' Component={Services}/>
          <Route path='/pricing' Component={Pricing}/>
        </Switch>
      
    </Router>
     
    </div>
  );
}

export default App;
