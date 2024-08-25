import './App.css';
import { useEffect, useContext } from 'react';
import { BrowserRouter, Router, Route,  Redirect, Switch } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import Home from './Pages/Home/Home';
import Listing from './Pages/Listing/Listing';
import LogInPage from './Pages/LogIn/LogInPage';
import Admin from './Pages/Admin/Admin.jsx'
import axios from 'axios';
import { LoginContext } from './Context/LogInContext.js';


function App() {

  useEffect(() => {
    //Runs on every render
  });

  axios.get('http://localhost:8000/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

const {test, setTest} = useContext(LoginContext)
  return (
    <div className="App">
  
    
      <BrowserRouter>
        <Switch>
        

        <Route path='/' exact >
           <Home/>
           </Route>

           <Route path = '/home'>
          <Home/>
          </Route>
          
           <Route path='/listing' >
           <Listing/>
           </Route>

           

        </Switch>
      </BrowserRouter>
        {/* <Home/> */}
        {/* <Listing/> */}
    
    {/* <select>
      <option>me </option>
      <option>her </option>
      <option>both</option>
    </select> */}
        
    </div>

  );
}

export default App;
