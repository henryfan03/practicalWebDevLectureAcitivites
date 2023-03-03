import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div>
         <h1>Hello, world!</h1>
         <h2>It is {new Date().toLocaleTimeString()}.</h2>

      </div>
    </div>
  );
}

export default App;
