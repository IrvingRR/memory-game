import { Routes, Route } from 'react-router-dom';
import { HomeScreen, GameScreen, GameOverScreen } from '../screens';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/game' element={<GameScreen/>}/>
        <Route path='/game-over/:state' element={<GameOverScreen/>}/>
        <Route path='*' element={<h2>Error 404 - Page not found</h2>}/>
    </Routes>
  );
};
