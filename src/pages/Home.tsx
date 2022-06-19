import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';
import Shelf from '../components/Shelf';
import Tile from '../components/Tile';
import plant from '../media/plant.png';
import { Link } from "react-router-dom";
import Logout from '../components/Logout';
import FoodPostData from "../types/post.type";
import PostDataService from "../services/food-post.service";

const Home = () => {

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


    // let example = [
    //     {
    //         name: 'name',
    //         location: 'location',
    //         date: 'date',
    //         time: 'time',
    //         restrict: ['nut', 'gluten', 'dairy'],
    //         person: 'person',
    //         contact: 'contact',
    //         category: 'meal'
    //     },
    //     {
    //         name: 'name',
    //         location: 'location',
    //         date: 'date',
    //         time: 'time',
    //         restrict: ['nut', 'gluten', 'dairy'],
    //         person: 'person',
    //         contact: 'contact',
    //         category: 'snack'
    //     },
    //     {
    //         name: 'name',
    //         location: 'location',
    //         date: 'date',
    //         time: 'time',
    //         restrict: ['nut', 'gluten', 'dairy'],
    //         person: 'person',
    //         contact: 'contact',
    //         category: 'drink'
    //     },
    //     {
    //         name: 'name',
    //         location: 'location',
    //         date: 'date',
    //         time: 'time',
    //         restrict: ['nut', 'gluten', 'dairy'],
    //         person: 'person',
    //         contact: 'contact',
    //         category: 'meal'
    //     },
    //     {
    //         name: 'name',
    //         location: 'location',
    //         date: 'date',
    //         time: 'time',
    //         restrict: ['nut', 'gluten', 'dairy'],
    //         person: 'person',
    //         contact: 'contact',
    //         category: 'meal'
    //     },
    // ]

    return (
        <div className='homepage'> 
            <nav className="navbar navbar-expand">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <p className='title'>let's roll</p>
                    </li>
                    <li className="nav-item">
                        <Logout></Logout>
                    </li>
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>

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
        </div>)

}

export default Home