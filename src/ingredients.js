import React from 'react';

const ingredientsArray = [
  {
    ingredient: 'Pizza Dough',
    quantity: '1 ball',
  },
  {
    ingredient: 'Margherita Sauce',
    quantity: '500ml',
  },
  {
    ingredient: 'Mozarella Cheese',
    quantity: '20oz',
  },
  {
    ingredient: 'Tomatoes',
    quantity: '3 ripe',
  },
  {
    ingredient: 'Basil',
    quantity: '1 handful',
  },
]

class ingredientComponent extends React.Component {
  render() {
    return <ul>
      <li> `{this.props.ingredientProp.quantity} {this.props.ingredientProp.ingredient}` </li>
    </ul>
  }
}

class ingredientsList extends React.Component { 
  render() {
    const ingredientsUL = ingredientsArray.map(ingredient => <ingredientComponent ingredientProp={ingredient } />)

    return (
      <div> {ingredientsUL} </div>
    );
  }
}

export default ingredientsList;