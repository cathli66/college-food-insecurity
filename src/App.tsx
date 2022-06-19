import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import '../src/components/Shelf';
import '../src/components/Tile';
import Home from '../src/pages/Home';
import ShowAll from '../src/pages/ShowAll';
import Login from '../src/components/Login';

import Register from '../src/components/Register';

import Reset from '../src/components/Reset';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

// import AddTutorial from "./components/add-tutorial.component";
import AddPost from "./components/AddPost";
import PostDataService from "../src/services/food-post.service"
import firebase from "firebase/compat";
import PostData from "../src/types/post.type"


let example: { name: string; description: string; location: string; date: string; time: string; restrict: string[]; person: string; contact: string; category: string; }[] = []




class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<ShowAll items={example} />} />
            <Route path="/add" element={<AddPost />} />
          </Routes>
        </Router>


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
