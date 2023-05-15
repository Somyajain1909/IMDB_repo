
import './App.css';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Recommendations from './Components/Recommendations';
import Home from './Home';

function App() {
  return (
    <div>
      <Navbar/><br/>
      <h1 className='my-3 mx-3' id="home"><i class="fa-brands fa-imdb"></i>&nbsp;IMDB TOP 1000 movies</h1>
      <Home/>
      
      <h3 style={{'color':'orange','fontSize':"29px",'fontWeight':'12000'}} className='mx-3 myn-3'>Top Picks</h3>
   
      <Recommendations/>
      <h1 className='my-3 mx-3' id="dashboard"><i class="fa-solid fa-chart-simple"></i>&nbsp;Dashboard</h1>

      <Dashboard/>
      <h1 className='my-3 mx-3' id="contact"><i class="fa-regular fa-address-book"></i>&nbsp;Contact</h1>
      <Contact/>
      
    </div>
  );
}

export default App;
