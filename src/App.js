import './App.css';

import Home from './Pages/Home/Home';
import { Route, Router, BrowserRouter,Switch } from 'react-router-dom';
import ListListing from './Pages/ListListing/ListListing';


function App() {

//   useEffect(() => {
//     Runs on every render
//   });

//   axios.get('http://localhost:8000/')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const {test, setTest} = useContext(LoginContext)
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
           
           {/* Home Routes */}
           <Route path='/' exact>
             <Home/>
           </Route>

            <Route path='/home'>
              <Home/>
           </Route>


           {/* Listing Routes  */}
{/* 
            <Route path=''>

           </Route>

            <Route path=''>

           </Route>

            <Route path=''>

           </Route> */}


        </Switch>
      </BrowserRouter>
      
     

    </div>

  );
}

export default App;
