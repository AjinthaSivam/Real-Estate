import './App.css';
import Blog from './Pages/Blog';

import CreateAds from './Pages/CreateAds';
import ManageAds from './Pages/ManageAds';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
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
