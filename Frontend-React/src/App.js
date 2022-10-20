import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Compoents/Login';
import Signup from './Compoents/Signup';
import Dashbord from './Compoents/DashBoard';
function App(){
  return (
    <div>
       <BrowserRouter>
     <Routes>
    
     <Route path='/loginpage'element={<Login/>}></Route>
     <Route path='/signupage'element={<Signup/>}></Route>
     <Route path='/dashboard'element={<Dashbord/>}></Route>
     </Routes>
     </BrowserRouter>
      

    </div>
  );
}

export default App;
