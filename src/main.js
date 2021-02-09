import React from 'react';
import pizza2 from './pizza2.jpeg';
import IngredientList from './IngredientList.js';

class PizzaMain extends React.Component {
  render() {
      return (
        <main className="main">
          <div className="main-wrapper">
            <div className="title-wrapper">
              <h2>Margherita Pizza</h2>
              <span>DATE POSTED: 02/08/2020</span>
            </div>
              <div className="image-recipe-wrapper">
                <img alt="margherita pizza" src ={pizza2}/>
                <div className="recipe-ingrediants">
                  <h3>Ingredients</h3>
                    <IngredientList />
                  <h3>Steps</h3>
                  <ol>
                      <li>Preheat your oven to 450 degrees.</li>
                      <li>Stretch your dough into your desired pizza shape.</li>
                      <li>Add your Margherita sauce.</li>
                      <li>Drop some cheese on that baby!</li>
                      <li>Add your toppings.</li>
                      <li>Pop in the oven for 15 minutes or until crust is golden brown.</li>
                      <li>Serve with crushed red pepper.</li>
                  </ol>
                </div>
            </div>
          </div>
        </main>
      )
  }
}

export default PizzaMain;