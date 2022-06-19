import React from 'react';
import '../styles/Shelf.scss';
import Tile from './Tile';
import useDrag from '../components/Drag';
import wood from '../media/wood.png';
import { Link, Route } from 'react-router-dom';
import ShowAll from '../pages/ShowAll'
import FoodPostData from "../types/post.type";

const Shelf = (
    {name, items, isHome} :
    {name: string; items: FoodPostData[]; isHome: boolean}
) => {

    // const navigate = useNavigate();


    // const handleClick = () => {
    //     this.context.router.push({ //browserHistory.push should also work here
    //         pathname: pathToMyComponent,
    //         state: {yourCalculatedData: data}
    //       }); 
    // }

    return (
        <div className='row'>
            {isHome &&
                <div className='info'>
                    <p className='shelfName'>{name}</p>
                    <Link to={{

                    }} className='seeAll'>see all</Link>
                    {/* <Link to={{
                        pathname: '../pages/ShowAll',
                        state: {
                            items: {items},
                        },
                    }} 
                    className='seeAll'> 
                        see all
                    </Link> */}
                </div>
            }
            {/* <div>
                <Route path='/showAll' component={ShowAll} />
            </div> */}
            <img src={wood} alt='shelf' className='shelf' />
            <div className='tiles'>
                {items.map((item) => {
                    return (
                        <div className='tile'>
                            <Tile name={item.name} location={item.location} date={item.date} time={item.time} restrict={item.restrict} person={item.person} contact={item.contact} category={item.category} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shelf

