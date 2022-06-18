import React from 'react';
import '../styles/Home.scss';
import Shelf from '../components/Shelf';
import Tile from '../components/Tile';
import plant from '../media/plant.png';
import {Link} from "react-router-dom";

const Home = () => {

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

    return (
        <div className='content'>
            <div className='left'>
                <img className='plant' src={plant} alt='plant'/>
            </div>
            <div className='right'>
                <Shelf name='Students' items={example} isHome={true}/>
                <Shelf name='Dining Halls' items={example} isHome={true}/>
                <Shelf name='Restaurants' items={example} isHome={true}/>
            </div>
        </div>
    )
}

export default Home