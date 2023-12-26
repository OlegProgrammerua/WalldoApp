
import './App.css';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import Game from './components/Game';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import LeadershipTable from './components/LeadershipTable';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path = '/leadership' element={<LeadershipTable/>}/>
      </Routes>
    </div>
  );
}

export default App;
