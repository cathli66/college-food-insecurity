import Shelf from '../components/Shelf';
import React, {useState} from 'react';

type item = {
    name: string, 
    location: string, 
    date: string, 
    time: string, 
    restrict: string[], 
    person: string, 
    contact: string, 
    category: string
}

const ShowAll = (
    {items} :
    {items: item[]}
) => {

    const [restrict, setRestrict] = useState([
        'dairy', 
        'soy', 
        'veg', 
        'nut', 
        'gluten', 
        'vegan',
    ]);

    const displayed = items.filter( i => {
        for (let n = 0; n < i.restrict.length; n++) {
            restrict.includes(i.restrict[n]);
        }
    })

    const divshelves = (items: item[]) : item[][] => {
        let counter = 0;
        let finshelves : item[][] = [];
        let currshelf : item[] = [];
        // finshelves : item[][];
        for(let n = 0; n < items.length; n++) {
            currshelf.concat(items[n]);
            counter++;
            if(counter === 3) {
                counter = 0;
                finshelves.concat(currshelf);
                currshelf = [];
            }
        }
        if(counter > 0) {finshelves.concat(currshelf)}
        return finshelves
    }
    
    const shelves : item[][] = divshelves(displayed)

    const updateRestrict = () => {}

    return (
        <>
            <div className='filters'>
                <p>Filters</p>
                <div className="dietFilters">
                    <p>Dietary Restrictions</p>
                    <input
                    type="checkbox"
                    name='dairy'
                    value='dairy free'
                    // checked={checkedState[index]}
                    // onChange={() => updateRestrict('dairy')}
                    />
                    dairy free
                    <input
                    type="checkbox"
                    // name='dairy'
                    value='soy free'
                    // checked={checkedState[index]}
                    // onChange={() => updateRestrict('soy')}
                    />
                    <input
                    type="checkbox"
                    // name='dairy'
                    value='vegetarian'
                    // checked={checkedState[index]}
                    // onChange={() => updateRestrict('veg')}
                    />
                    <input
                    type="checkbox"
                    // name='dairy'
                    value='vegan'
                    // checked={checkedState[index]}
                    // onChange={() => updateRestrict('vegan')}
                    />
                    <input
                    type="checkbox"
                    // name='dairy'
                    value='nut free'
                    // checked={checkedState[index]}
                    // onChange={() => updateRestrict('nut')}
                    />
                    <input
                    type="checkbox"
                    // name='dairy'
                    value='gluten free'
                    // checked={checkedState[index]}
                    // onChange={() => updateRestrict('gluten')}
                    />
                </div>
                <div className='foodFilters'>
                    <p>Food Categories</p>
                        
                </div>
            </div>
            <div className='shelves'>
                {shelves.map((sublist) => {
                        return (
                            <div className='tile'> 
                                <Shelf items={sublist} name='' isHome={false}/>
                            </div>
                        )
                })}
            </div>
        </>
    )
}

export default ShowAll
