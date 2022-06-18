import React from 'react';
import '../styles/Home.scss';
import '.'
import Shelf from '../components/Shelf';
import Tile from '../components/Tile'

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
        <div>
            <img src='../media/plant.png' alt='plant'/>
            <Shelf name='Students' items={example}/>
            <Shelf name='Dining Halls' items={example}/>
            <Shelf name='Restaurants' items={example}/>
        </div>
    )
}

export default Home