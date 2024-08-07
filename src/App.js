import './App.css';
import HomeNavSearch from './Components/HomeNavSearch/HomeNavSearch';
import ListListingNavSearch from './Components/ListListingNavSearch/ListListingNavSearch';
import SelectedListingSearch from './Components/SelectedListingNavSearch/SelectedListingSearch';

function App() {
  return (
    <div className="App">
     {/* <HomeNavSearch/> */}
     {/* <ListListingNavSearch/> */}
     <SelectedListingSearch/>
    </div>
  );
}

export default App;
