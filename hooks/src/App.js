import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  const [count,setCount] = useState(10)

  const handleClick = () => {
    setCount(count+5)
  }
  return (
    <div className="App">
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
      <div>
        <div>{count}</div>
        <button onClick={handleClick}>Add 5</button>
          
      </div>
    </div>
  );
}

export default App;
