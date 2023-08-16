import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


const Rl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
const Rc = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 3px solid #010101;
`;
const Head5 = styled.h5`
   margin: 10px 0;
`;

export const RecipeGallery = () => {
    const[recipes, setRecipes] = useState([]);
    const fetchRecipes = async() => {
        try {
           const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
           setRecipes(response.data.meals);
        }catch(error){
            console.error('Error fetching recipes', error);
        }
    }; 
  
    useEffect(() => {
        fetchRecipes();
    })
  return (
    <div id = 'recipegallery' className="py-5">
      <div className='container'>
      <h1>Recipe Gallery</h1>
      <h4 className='mb-5'>Here is a gallery with our best recipes...</h4>
      <Rl className="recipe-list">
        {recipes.map((recipe) => (
          <Link key={recipe.idMeal} to={`/receta/${recipe.idMeal}`}>
          <Rc className="recipe-card">
            <Img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <Head5>{recipe.strMeal}</Head5>
          </Rc>
        </Link>
        ))}
      </Rl>
    </div>
    </div>
  )
}
