import React from 'react';

class IngredientComponent extends React.Component {
  render() {
    return <ul>
      <li key="{ingredient}"> {this.props.ingredientProp.quantity} {this.props.ingredientProp.ingredient}</li>
    </ul>
  }
}

export default IngredientComponent;