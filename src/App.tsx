import { Component } from "react";
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
import PostDataService from "./services/food-post.service";
import FoodPostData from "./types/post.type";

type Props = {};

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
