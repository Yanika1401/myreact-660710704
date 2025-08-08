import './App.css';
import JSXExamples from './components/JSXExample';
import Hello from './hello';
import logo from './pngwing.com.png';


function App() {
  return (
    <div className="App">
      <Hello />
      <JSXExamples />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my <code>dog</code> is so cute.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Goodbye!!
        </p>

      </header>

    </div>
  );
}

export default App;
