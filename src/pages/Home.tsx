import { useState, useEffect } from 'react';
import '../styles/Home.scss';
import Shelf from '../components/Shelf';
import plant from '../media/plant.png';
import { Link, useNavigate } from "react-router-dom";
import Logout from '../components/Logout';
import FoodPostData from "../types/post.type";
import PostDataService from "../services/food-post.service";
import firebase from "../firebase";
import UserProfile from "./Profile"

const Home = () => {
    const db = firebase.collection("/users");
    const navigate = useNavigate();
    const [studentItems, setStudentItems] = useState<FoodPostData[] | undefined>();
    const [hallItems, setHallItems] = useState<FoodPostData[] | undefined>();
    const [restItems, setRestItems] = useState<FoodPostData[] | undefined>();


    useEffect(() => {
        if (studentItems == undefined) {
            getStudentItems();
        }
        else if (hallItems == undefined) {
            getHallItems();
        }
        else if (restItems == undefined) {
            getRestItems();
        }

    })

    const getStudentItems = async () => {
        const data = await PostDataService.getAllStudent();
        setStudentItems(data);
    }

    const getHallItems = async () => {
        const data = await PostDataService.getAllHall();
        setHallItems(data);
    }

    const getRestItems = async () => {
        const data = await PostDataService.getAllRestaurant();
        setRestItems(data);
    }

    if (studentItems == undefined || hallItems == undefined || restItems == undefined) {
        return <div>Loading... </div>
    }

    return (
        <div className='homepage'>
            <nav className="navbar navbar-expand">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <p className='homelogo'>let's roll</p>
                    </li>
                    <li className="nav-item">
                        <div className='helper'>
                            <Logout></Logout>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className='helper'>
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </div>
                    </li>

                    <li className="nav-item">
                        <div className='helper'>
                            <Link to={"/add"} className="nav-link">
                                Add
                            </Link>
                        </div>

                    </li>

                    <li className="nav-item">
                        <UserProfile />
                    </li>

                </div>
            </nav >

            <div className='content'>

                <div className='content'>
                    <div className='left'>
                        <img className='plant' src={plant} alt='plant' />
                    </div>
                    <div className='right'>
                        <Shelf name='Students' items={studentItems} isHome={true} />
                        <Shelf name='Dining Halls' items={hallItems} isHome={true} />
                        <Shelf name='Restaurants' items={restItems} isHome={true} />
                    </div>
                </div>
            </div>
        </div >

    );




}

export default Home;