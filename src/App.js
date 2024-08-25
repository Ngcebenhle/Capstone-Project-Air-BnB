import './App.css';

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
      <h1>Welcome</h1>
    </div>

  );
}

export default App;
