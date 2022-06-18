import React from 'react';
import '../styles/Tile.scss';

// import category icons
import meal from '../media/meal.png';
import prod from '../media/prod.png';
import dessert from '../media/dessert.png';
import drink from '../media/drink.png';
import snack from '../media/snack.png';

// import restriction icons
import dairy from '../media/dairy.png';
import soy from '../media/soy.png';
import veg from '../media/veg.png';
import nut from '../media/nut.png';
import gluten from '../media/gluten.png';
import vegan from '../media/vegan.png';

// import dogs
import dog1 from '../media/dog1.png';

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
                   {/* {restrict.map((restriction) => {
                        return (
                            <img src={`../media/${restriction}.png`} className='restriction'/>)
                    })} */}
                    {restrict.includes('soy') && 
                        <img src={soy} alt='soy' className='restriction'/>
                    }
                    {restrict.includes('dairy') && 
                        <img src={dairy} alt='dairy' className='restriction'/>
                    }
                    {restrict.includes('veg') && 
                        <img src={veg} alt='veg' className='restriction'/>
                    }
                    {restrict.includes('nut') && 
                        <img src={nut} alt='nut' className='restriction'/>
                    }
                    {restrict.includes('gluten') && 
                        <img src={gluten} alt='gluten' className='restriction'/>
                    }
                    {restrict.includes('vegan') && 
                        <img src={vegan} alt='vegan' className='restriction'/>
                    }
                </div> 
            </div>
            {/* categories: meal, prod, dessert, drink, snack */}
            {category === 'meal' && 
                <img src={meal} alt='meal' className='category'/>
            }
            {category === 'prod' && 
                <img src={prod} alt='prod' className='category'/>
            }
            {category === 'dessert' && 
                <img src={dessert} alt='dessert' className='category'/>
            }
            {category === 'drink' && 
                <img src={drink} alt='drink' className='category'/>
            }
            {category === 'snack' && 
                <img src={snack} alt='snack' className='category'/>
            }
            <div className='label'>
                <p className='date'>{date}</p>
                <p className='time'>{time}</p>
                <p className='location'>{location}</p>
            </div>
            {/* <img src={dog1} alt='dog1' className='dog1'/> */}
        </>
    )
}

export default Tile