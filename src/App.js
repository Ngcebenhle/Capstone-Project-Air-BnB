import './App.css';
import Home from './Pages/Home/Home';

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
      <Home/>
    </div>

  );
}

export default App;
