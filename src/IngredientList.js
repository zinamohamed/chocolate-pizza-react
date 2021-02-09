import React from 'react';
import IngredientComponent from './IngredientItems.js';
import IngredientsArray from './data.js';

class IngredientList extends React.Component {
    render() {
        
        const ingredientsUL = 
        IngredientsArray.map(
            ingredient => 
            < IngredientComponent ingredientProp={
            ingredient 
            } />)
        return (
            <div>
                { ingredientsUL }
            </div>
        );
    }
}

export default IngredientList;