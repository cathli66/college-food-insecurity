import React, { useState } from 'react';

//dietary restrictions
import dairy from '../media/dairy.png';
import soy from '../media/soy.png';
import veg from '../media/veg.png';
import nut from '../media/nut.png';
import gluten from '../media/gluten.png';
import vegan from '../media/vegan.png';

const Filters = () => {
    return (
        <>
            <p>Filters</p>
            <div className="dietFilters">
                <p>Diet Categories</p>
                <ul>
                    <li>
                        <img className='icon' src={dairy} alt='icon'/>
                        <p className='filter'>Dairy</p>
                    </li>
                    <li>
                        <img className='icon' src={soy} alt='icon'/>
                        <p className='filter'>Soy</p>
                    </li>
                    <li>
                        <img className='icon' src={veg} alt='icon'/>
                        <p className='filter'>Vegetarian</p>
                    </li>
                    <li>
                        <img className='icon' src={nut} alt='icon'/>
                        <p className='filter'>Nuts</p>
                    </li>
                    <li>
                        <img className='icon' src={gluten} alt='icon'/>
                        <p className='filter'>Gluten</p>
                    </li>
                    <li>
                        <img className='icon' src={vegan} alt='icon'/>
                        <p className='filter'>Vegan</p>
                    </li>
                </ul>
            </div>
        
        </>
    )
}

export default Filters