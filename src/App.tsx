import { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import '../src/components/Shelf';
import '../src/components/Tile';
import Home from '../src/pages/Home';
import ShowAll from '../src/pages/ShowAll';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Reset from '../src/components/Reset';
import AddPost from "./components/AddPost";
import FoodPostData from "./types/post.type";

type Props = {}

type State = {
  data: FoodPostData[] | null
};

class App extends Component<Props, State> {
  render() {
      return (
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add" element={<AddPost />} />
              <Route path="/feed/student" element={<ShowAll />} />
              {/* <Route path="/feed/student" element={<ShowAll items={student}/>} />
              <Route path="/feed/dining" element={<ShowAll items={dining}/>} />
              <Route path="/feed/restaurant" element={<ShowAll items={restaurant}/>} /> */}
            </Routes>
          </Router>
        </div>
      );
    }
        /* <nav className="navbar navbar-expand navbar-dark bg-dark">
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
=======
    return (
      <div>
        <Router>
>>>>>>> d949fb2bbd425ac5a1f7e46b4a6a3f0f35c13cae
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/feed" element={<ShowAll />} />
          </Routes>
        </Router>
      </div>
    );
  }

}

export default App;
