import React from 'react';
import PizzaHeader from './header.js';
import PizzaFooter from './footer.js';
import PizzaMain from './main.js';

import './App.css';
// import { ingredientsList } from './ingredients.js';
// import { ingredientsArray }from './data.js';

// export default class App extends React.Component {
//   render() {
//     
// }

function App() {
    return(
      <div className="App">
        <PizzaHeader />
        <PizzaMain />
        <PizzaFooter />
      </div>
    );
}

export default App;
