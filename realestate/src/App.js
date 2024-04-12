import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import  About  from './Components/about';
import Services from './Components/services';
import Pricing from './Components/pricing';
import Home from './Components/home';
import Contacts from './Components/contacts';



import Blog from './Pages/Blog';

import CreateAds from './Pages/CreateAds';
import ManageAds from './Pages/ManageAds';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
          <Route path = '/contactus' Component={Contacts}/>
        </Routes>
      
    </Router>
     
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/create-ads' element={<CreateAds/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/manage-ads' element={<ManageAds/>}/>
          <Route path='/create-ads' element={<CreateAds/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
