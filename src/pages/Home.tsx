import React, {useState, useEffect} from 'react';
import '../styles/Home.scss';
import Shelf from '../components/Shelf';
import Tile from '../components/Tile';
import plant from '../media/plant.png';
import { Link } from "react-router-dom";
import Logout from '../components/Logout';
import FoodPostData from "../types/post.type";
import PostDataService from "../services/food-post.service";

const Home = () => {

    const [items, setItems] = useState<FoodPostData[] | undefined>();

    useEffect(() => {
        if(items == null) {
            getItems();
        }
    })

    const getItems = async () => {
        const data = await PostDataService.getAll();
        setItems(data);
    }

    if(items == undefined) {
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
        <div className='homepage'> <p className='title'>let's roll</p>
            <Logout></Logout>
            <div className='content'>

                <div className='left'>
                    <img className='plant' src={plant} alt='plant' />
                </div>
                <div className='right'>
                    <Shelf name='Students' items={items} isHome={true} />
                    <Shelf name='Dining Halls' items={items} isHome={true} />
                    <Shelf name='Restaurants' items={items} isHome={true} />
                </div>
            </div>
        </div>)

}

export default Home