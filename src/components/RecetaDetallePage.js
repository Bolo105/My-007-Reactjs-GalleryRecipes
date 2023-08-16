import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Receta } from './Receta';


 const RecetaDetallePage = () => {
  const { idMeal } = useParams(); // Obtiene el ID de la receta desde los parámetros de la URL
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        setReceta(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe details', error);
      }
    };

    fetchReceta();
  }, [idMeal]);

  return (
    <div id='recetadetalle' className="py-5">
      <div className='container'>
        {receta && <Receta receta={receta} />}
        <Link to="/" className="btn btn-primary">Come Back</Link>
      </div>
    </div>
  );
};
export default RecetaDetallePage;