import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-wrapper">
          <h1>Our Blog Name</h1>
          <img src = 'logo.png'/>
        </div>
        <div className="button-wrapper">
          <button>Twitter</button>
          <button>Instagram</button>
          <button>Blogger</button>
        </div>
      </header>
      <main className="main">
        <div className="image-title-wrapper">
          <h2>Recipe Name</h2>
          <span>02/08/2020</span>
        </div>
        <div className="image-wrapper">
          <img src ="recipe-img.png"/>
        </div>
        <div className="recipe">
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="ingrediants">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
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
