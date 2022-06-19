import Shelf from '../components/Shelf';
import React, {useState} from 'react';
import FoodPostData from "../types/post.type";
import PostDataService from "../services/food-post.service";
import { useEffect } from 'react';
import { getItemsPos } from 'react-horizontal-scrolling-menu';

const ShowAll = (
    {items_promise} :
    {items_promise: Promise<FoodPostData[]>}
) => {

    const [items, setItems] = useState<FoodPostData[] | undefined>();

    const [restrict, setRestrict] = useState([
        'dairy', 
        'soy', 
        'veg', 
        'nut', 
        'gluten', 
        'vegan',
    ]);

    useEffect(() => {
        if(items == null) {
            getItems();
        }
    })

    const getItems = async () => {
        const data = await items_promise;
        setItems(data);
    }

    if(items == undefined) {
        return <div>Loading... </div>
    }

    const displayed = items.filter( i => {
        for (let n = 0; n < i.restrict.length; n++) {
            restrict.includes(i.restrict[n]);
        }
    })

    const divshelves = (items: FoodPostData[]) : FoodPostData[][] => {
        let counter = 0;
        let finshelves : FoodPostData[][] = [];
        let currshelf : FoodPostData[] = [];
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
    
    const shelves : FoodPostData[][] = divshelves(displayed)

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
