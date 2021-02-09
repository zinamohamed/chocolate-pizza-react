import React from 'react';
import logo from './logo.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import blogger from './blogger.svg';
import pizza2 from './pizza2.jpeg';
import chef from './chef.svg';
import './App.css';
// import { ingredientsList } from './ingredients.js';
import { ingredientsArray }from './data.js';


class IngredientItem extends React.Component {
  render() {
    return <div>
      <p> {this.props.ingredientProp.quantity} {this.props.ingredientProp.ingredient} </p>
    </div>
  }
}


export default class App extends React.Component {
  render() {
    const ingredientsUL = ingredientsArray.map(
      ingredient => 
      <IngredientItem ingredientProp={
        ingredient 
      } />)
  }
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Damion&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700;800&family=Quicksand:wght@300&display=swap');
      </style>
      <header className="App-header">
        <div className="logo-wrapper">
          <img alt="pizza logo" className="header-logo" src={logo}/>
          <h1>Pizza Time!</h1>
        </div>
        <div className="button-wrapper">
          <button>
            <img alt="twitter logo" src={twitter}/>
          </button>
          <button>
            <img alt="instagram logo" src={instagram}/>
          </button>
          <button>
            <img alt="blogger logo" src={blogger}/>
          </button>
        </div>
      </header>
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
                  { ingredientsUL }
                <h3>Steps</h3>
                <ol>
                    <li>Preheat your oven to 450 degrees.</li>
                    <li>Stretch your dough into your desired pizza shape</li>
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
      <footer>
        <div className="chef-wrapper">
          <img alt="little cute chef" src={chef}/>
          <p>One stop shop for all your favorite recipes with Little Chef!</p>
          <button>Share Recipe!</button>
        </div> 
        <div className="copyright-wrapper">
          <p>Copyright Stuff</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
