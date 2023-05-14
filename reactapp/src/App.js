
import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Home from './Home';

function App() {
  return (
    <div>
      <Navbar/><br/>
      <h1 className='my-3 mx-3'>IMDB TOP 1000 movies</h1>
      <Home/>
      

      <Dashboard/>
    </div>
  );
}

export default App;
