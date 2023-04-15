import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {ApiData} from "./apiexample.js";

function App(props) {
  return (
    <div className="App">
      <div>
         <h1>Hello, world!</h1>
         <h2>It is {new Date().toLocaleTimeString()}.</h2>
          <Routes>
              <Route index element={<Home/>}/>;
              <Route path="about" element={<About/>}/>;
          </Routes>
      </div>
    </div>
  );
}

function Home() {
    return (
         <div>
             <h1>"Home"</h1>
             <Link to ="/about">About Page</Link>;
         </div>
    )
}

function About() {
    return (
            <div>
                <h1>"About"</h1>
                <Link to ="/">Back</Link>;
                <ApiData/>
            </div>
            )
}

export default App;
