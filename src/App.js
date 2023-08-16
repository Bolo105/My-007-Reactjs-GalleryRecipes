import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecipeGallery } from './components/RecypeGallery';
import RecetaDetallePage from './components/RecetaDetallePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<RecipeGallery />} />
           <Route path="/receta/:idMeal" element={<RecetaDetallePage />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
