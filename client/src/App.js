import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';


function App() {
  return (
    <div className="App">
      
      <div classname="main">
        <div className="buttons">
          <button class="button is-primary">Primary</button>
          <button class="button is-link">Link</button>
          <button class="button is-info">Info</button>
          <button class="button is-success">Success</button>
          <button class="button is-warning">Warning</button>
          <button class="button is-danger">Danger</button>
          <button class="button is-black">Black</button>
          <button class="button is-white">White</button>
          <button class="button is-dark">Dark</button>
          <button class="button is-light">Light</button>
        </div>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
