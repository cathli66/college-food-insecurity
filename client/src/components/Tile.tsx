import React from 'react';
import '../styles/Tile.scss';

const Tile = (
    {name, location, date, time, restrict, person, contact, category} :
    {name: string; location: string; date: string; time: string; restrict: string[]; person: string; contact: string; category: string}
) => {
    return (
        <>
            <div className='card'>
                <p className='name'>{name}</p>
                <p className='person'>{person} | {contact}</p>
                <div className='restrict'>
                    {/* restrictions: soy, dairy, veg, nut, gluten, vegan */}
                   {restrict.map((restriction) => {
                        return (
                            <img src={`../media/${restriction}.png`} className='restriction'/>)
                    })}
                </div> 
            </div>
            {/* categories: meal, prod, dessert, drink, snack */}
            <img src={`../media/${category}.png`} className='category'/>
            <div className='label'>
                <p className='date'>{date}</p>
                <p className='time'>{time}</p>
                <p className='location'>{location}</p>
            </div>
        </>
    )
}

export default Tile