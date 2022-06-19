import Shelf from '../components/Shelf';
import FoodPostData from "../types/post.type";
import PostDataService from "../services/food-post.service";
import { getItemsPos } from 'react-horizontal-scrolling-menu';
import React, { useState, useEffect } from 'react';
import '../styles/ShowAll.scss'

const ShowAll = (
    {items_promise} :
    {items_promise: Promise<FoodPostData[]>}
) => {

    const divshelves = (items: FoodPostData[]|undefined) : FoodPostData[][] => {
    
        let counter : number = 0;
        let finshelves : FoodPostData[][] = [];
        if (items == undefined) return finshelves;
        let currshelf : FoodPostData[] = [];
        for(let n = 0; n < items.length; n++) {
            currshelf.push(items[n]);
            counter = counter + 1;
            if(counter === 3) {
                counter = 0;
                finshelves.push(currshelf);
                currshelf = [];
            }
        }

        if(counter) { finshelves.push(currshelf) }
        console.log(finshelves.length)
        return finshelves
    };

    const [items, setItems] = useState<FoodPostData[] | undefined>();

    const [dairy, setDairy] = useState(false);
    const [soy, setSoy] = useState(false);
    const [veg, setVeg] = useState(false);
    const [nut, setNut] = useState(false);
    const [gluten, setGluten] = useState(false);
    const [vegan, setVegan] = useState(false);

    const [dessert, setDessert] = useState(false);
    const [drink, setDrink] = useState(false);
    const [meal, setMeal] = useState(false);
    const [prod, setProd] = useState(false);
    const [snack, setSnack] = useState(false);

    const[displayed, setDisplayed] = useState(items);
    const[shelves, setShelves] = useState<FoodPostData[][]>( divshelves(items));
//useState<UserData | null>(null)

useEffect ( () => {

    if(items == null) {
        getItems();
    }

    let n : string[] = [];
    if (dairy) n.push('dairy')
    if (soy) n.push('soy')
    if (veg) n.push('veg')
    if (nut) n.push('nut')
    if (gluten) n.push('gluten')
    if (vegan) n.push('vegan')


    let newDisplay : FoodPostData[] = [];
    if (n.length === 0 || items == undefined) {
        getItems();
    } else {
        for (let i = 0; i < items.length; i++) {
            let count = n.length
            for (let j = 0; j < n.length; j++) {
                if (items[i].restrict.includes(n[j])) {
                    count = count - 1
                }
            }
            if (count === 0) newDisplay.push(items[i])
        }
        setDisplayed(newDisplay)
    }
    setShelves(divshelves(newDisplay))

    let m : string[] = [];
    if (meal) m.push('meal')
    if (drink) m.push('drink')
    if (snack) m.push('snack')
    if (prod) m.push('prod')
    if (dessert) m.push('dessert')
    if (m.length === 0) {
        m = ['meal', 'drink', 'snack', 'dessert', 'prod']
    }


    let nd : FoodPostData[] = [];
    if (m.length !== 0) {
        for (let i = 0; i < newDisplay.length; i++) {
            if (m.includes('meal') && newDisplay[i].category === 'meal') {
                nd.push(newDisplay[i])
            }
            else if (m.includes('dessert') && newDisplay[i].category === 'dessert') {
                nd.push(newDisplay[i])
            }
            else if (m.includes('prod') && newDisplay[i].category === 'prod') {
                nd.push(newDisplay[i])
                continue
            }
            else if (m.includes('snack') && newDisplay[i].category === 'snack') {
                nd.push(newDisplay[i])
            }
            else if (m.includes('drink') && newDisplay[i].category === 'drink') {
                nd.push(newDisplay[i])
            }
        }
        setDisplayed(nd)
        setShelves(divshelves(nd))

    }
     
}, [dairy, soy, veg, gluten, nut, vegan, meal, dessert, drink, snack, prod]);

    const getItems = async () => {
        const data = await items_promise;
        setItems(data);
        setShelves(divshelves(data));
        setDisplayed(items);
    }

    if(items == undefined) {
        return <div>Loading... </div>
    }


    

    const updateDairy = () => {
        if (dairy === false) {
            setDairy(true)
        } else {
            setDairy(false)
        }
    }

    const updateVeg = () => {
        if (veg === false) {
            setVeg(true)
        } else {
            setVeg(false)
        }
    }

    const updateNut = () => {
        if (nut === false) {
            setNut(true)
        } else {
            setNut(false)
        }
    }

    const updateSoy = () => {
        if (soy === false) {
            setSoy(true)
        } else {
            setSoy(false)
        }
    }

    const updateGluten = () => {
        if (gluten === false) {
            setGluten(true)
        } else {
            setGluten(false)
        }
    }

    const updateVegan = () => {
        if (vegan === false) {
            setVegan(true)
        } else {
            setVegan(false)
        }
    }

    const updateSnack = () => {
        if (snack === false) {
            setSnack(true)
        } else {
            setSnack(false)
        }
    }

    const updateProd = () => {
        if (prod === false) {
            setProd(true)
        } else {
            setProd(false)
        }
    }

    const updateMeal = () => {
        if (meal === false) {
            setMeal(true)
        } else {
            setMeal(false)
        }
    }

    const updateDrink = () => {
        if (drink === false) {
            setDrink(true)
        } else {
            setDrink(false)
        }
    } 

    const updateDessert = () => {
        if (dessert === false) {
            setDessert(true)
        } else {
            setDessert(false)
        }
    }

    return (
        <>
        <div className='header'>
                <p className='title'>let's roll</p>
        </div>
        <div className='showAll'>
            <div className='filters'>
                <p className='filtersTitle'>filter by</p>
                <div className="dietFilters">
                    <p className='subtitle'>dietary restrictions</p>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateDairy}/>
                        <p>dairy free</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateSoy}/>
                        <p>soy free</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateVeg}/>
                        <p>vegetarian</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateNut}/>
                        <p>nut free</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateGluten}/>
                        <p>gluten free</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateVegan}/>
                        <p>vegan</p>
                    </div>
                </div>
                <div className='foodFilters'>
                    <p className='subtitle'>food categories</p>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateMeal}/>
                        <p>meals</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateDessert}/>
                        <p>desserts</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateDrink}/>
                        <p>drinks</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateProd}/>
                        <p>product/ingredients</p>
                    </div>
                    <div className='filter'>
                        <input type="checkbox" onChange={updateSnack}/>
                        <p>snacks</p>
                    </div>
                </div>
            </div>
            <div className='shelves'>
                {shelves && 
                    <div>
                        {shelves.map( shelf =>
                            <Shelf items={shelf} name='' isHome={false}/>

                        )}
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default ShowAll
