
import './App.css';
import {Routes , Route , Link , NavLink} from 'react-router-dom';
import Home from './Components/Home/Home';
import Timer from './Components/Timer/Timer';
import Clock from './Components/Clock/Clock';
import StopWatch from './Components/StopWatch/StopWatch';
function App() {
  return (
    <div className="App">
      <div className='menu-bar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/clock'>Clock</NavLink>
        <NavLink to='/timer'>Timer</NavLink>
        <NavLink to='/stopwatch'>StopWatch</NavLink>
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clock' element={<Clock />}/>
        <Route path='/timer' element={<Timer />} />
        <Route path='/stopwatch' element={<StopWatch />} />
      </Routes>
    </div>
  );
}

export default App;