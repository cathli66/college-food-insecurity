import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import '../src/components/Shelf';
import '../src/components/Tile';
import Home from '../src/pages/Home';


import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <p className='title'>let's roll</p>
        <Home/>
      </div>
    );
  }
}

export default App;
