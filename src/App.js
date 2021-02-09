import logo from './logo.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import blogger from './blogger.svg';
import pizza from './pizza.jpeg'
import pizza2 from './pizza2.jpeg'
import './App.css';

function App() {
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
        <div className="image-title-wrapper">
          <h2>Margherita Pizza</h2>
          <span>DATE POSTED: 02/08/2020</span>
        </div>
        <div className="image-recipe-wrapper">
          <img src ={pizza2}/>
        <div className="recipe-ingrediants">
          <h3>Ingredients</h3>
          <ul>
              <li>Pizza Dough</li>
              <li>Margherita Sauce</li>
              <li>Mozarella Cheese</li>
              <li>Tomatoes</li>
              <li>Basil</li>
          </ul>
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
      </main>
      <footer>
        <img src="footer-img"/>
        <p>Lorem</p>
        <button>Share Recipe!</button>
        <p>Copyright Stuff</p>
      </footer>
    </div>
  );
}

export default App;
