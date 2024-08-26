import './App.css';

import Home from './Pages/Home/Home';
import { Route, Router, BrowserRouter,Switch } from 'react-router-dom';
import ListListing from './Pages/ListListing/ListListing';
import Listing from './Pages/Listing/Listing.jsx'
import LogInPage from './Pages/LogIn/LogInPage.jsx'
import Admin from './Pages/Admin/Admin.jsx'
import NotFound from './Pages/NotFound.jsx';
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

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
           
           {/* Home Routes */}
           <Route path='/' exact>
             <Home/>
            
           </Route>

            <Route path='/home'>
              {/* <Home/> */}
           </Route>


           {/* Listing Routes  */}

            <Route path='/listListings'>
              <ListListing/>
           </Route>

            <Route path='listing:id'>
                <Listing/>
            </Route>

            {/* LogIn Routes  */}
           <Route path='logIn'>
                <LogInPage/>
           </Route>

            {/* Admin Routes  */}
            <Route path='/admin'>
                <Admin/>
           </Route>

             {/* Page Not Found Routes  */}
            <Route path='*'>
            <NotFound/>
           </Route>


        </Switch>
      </BrowserRouter>
      
     

    </div>

  );
}

export default App;
