import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 3px solid #010101;
`;
const Ul = styled.ul`
  text-align: left;
  padding-left: 0;
`;

export const Receta = ({ receta}) => {
  return (
    <div id='receta' className='py-5'>
     <div className='container'>
        <div className="row">
            <div className="col-lg-4">
                <Img src={receta.strMealThumb} alt={receta.strMeal} />
            </div>
            <div className="col-lg-8">
                <h3>instructions:</h3>
                <div className='text-left'>
                  <Ul className="list-unstyled">
                     {receta.strInstructions.split('\n').map((step, index) => (
                        <li key={index}>{step}</li>
                     ))}
                  </Ul>
                </div>
            </div>
        </div>
      </div>
  </div>
  )
}