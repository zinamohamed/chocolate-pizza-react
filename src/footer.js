import React from 'react';
import chef from './chef.svg';

class PizzaFooter extends React.Component {
  render() {
      return (
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
      )
  }
}

export default PizzaFooter;