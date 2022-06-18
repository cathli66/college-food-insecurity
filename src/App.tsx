import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import '../src/components/Shelf';
import '../src/components/Tile';
import Home from '../src/pages/Home';
import ShowAll from '../src/pages/ShowAll';


// import AddTutorial from "./components/add-tutorial.component";
import AddPost from "./components/add-post.component";
import TutorialsList from "./components/tutorials-list.component";

let example = [
  {
      name: 'name', 
      location: 'location', 
      date: 'date', 
      time: 'time', 
      restrict: ['nut', 'gluten', 'dairy'], 
      person: 'person', 
      contact: 'contact', 
      category: 'meal'
  },
  {
      name: 'name', 
      location: 'location', 
      date: 'date', 
      time: 'time', 
      restrict: ['nut', 'gluten', 'dairy'], 
      person: 'person', 
      contact: 'contact', 
      category: 'snack'
  },
  {
      name: 'name', 
      location: 'location', 
      date: 'date', 
      time: 'time', 
      restrict: ['nut', 'gluten', 'dairy'], 
      person: 'person', 
      contact: 'contact', 
      category: 'drink'
  },
  {
      name: 'name', 
      location: 'location', 
      date: 'date', 
      time: 'time', 
      restrict: ['nut', 'gluten', 'dairy'], 
      person: 'person', 
      contact: 'contact', 
      category: 'meal'
  },
  {
      name: 'name', 
      location: 'location', 
      date: 'date', 
      time: 'time', 
      restrict: ['nut', 'gluten', 'dairy'], 
      person: 'person', 
      contact: 'contact', 
      category: 'meal'
  },
]
class App extends Component {
  render() {
    return (
      <div>
        <p className='title'>let's roll</p>
        <Home/>
        <ShowAll items={example}/>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Typescript Firestore example</h2>
          <Routes>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddPost} />
          </Routes>
        </div> */}
      </div>
    );
  }
}

export default App;
