import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../screens';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/game' element={<h2>Game Route</h2>}/>
        <Route path='/game-over' element={<h2>Game Over Route</h2>}/>
        <Route path='*' element={<h2>Error 404 - Page not found</h2>}/>
    </Routes>
  );
};
