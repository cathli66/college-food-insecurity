import React from 'react';
import '../styles/Home.scss';
import Shelf from '../components/Shelf';
import Tile from '../components/Tile';
import plant from '../media/plant.png';
import { Link } from "react-router-dom";
import Logout from '../components/Logout';
import PostDataService from "../services/food-post.service";
import IPostData from '../types/post.type'

const Home = () => {

    let example: IPostData[] = [
        {
            name: 'name',
            description: 'description',
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
            description: 'description',
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
            description: 'description',
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
            description: 'description',
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
            description: 'description',
            location: 'location',
            date: 'date',
            time: 'time',
            restrict: ['nut', 'gluten', 'dairy'],
            person: 'person',
            contact: 'contact',
            category: 'meal'
        },
    ]

    return (
        <div className='homepage'> <p className='title'>let's roll</p>
            <Logout></Logout>
            <div className='content'>

                <div className='left'>
                    <img className='plant' src={plant} alt='plant' />
                </div>
                <div className='right'>
                    <Shelf name='Students' items={example} isHome={true} />
                    <Shelf name='Dining Halls' items={example} isHome={true} />
                    <Shelf name='Restaurants' items={example} isHome={true} />
                </div>
            </div>
        </div>)

}

export default Home