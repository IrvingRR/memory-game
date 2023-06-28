import { Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<h2>Home Route</h2>}/>
        <Route path='/game' element={<h2>Game Route</h2>}/>
        <Route path='/end-game' element={<h2>End Game Route</h2>}/>
        <Route path='*' element={<h2>Error 404 - Page not found</h2>}/>
    </Routes>
  );
};
