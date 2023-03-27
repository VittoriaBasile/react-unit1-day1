import logo from "./logo.svg";
import "./App.css";
import "./component/ButtonComponent";
import ButtonComponent from "./component/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent text="clicca qui" />
        <ButtonComponent text="non cliccare" />
      </header>
    </div>
  );
}

export default App;
