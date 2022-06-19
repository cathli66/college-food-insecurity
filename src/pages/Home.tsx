import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';
import Shelf from '../components/Shelf';
import Tile from '../components/Tile';
import plant from '../media/plant.png';
import { Link, useNavigate } from "react-router-dom";
import Logout from '../components/Logout';
import FoodPostData from "../types/post.type";
import PostDataService from "../services/food-post.service";
import UserDataService from "../services/user-info.service";
import UserData from "../types/user.type";
import firebase from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { userInfo } from 'os';


const Home = () => {
    // const auth = getAuth();
    const [items, setItems] = useState<FoodPostData[] | undefined>();
    const db = firebase.collection("/users");
    const navigate = useNavigate();

    const auth = getAuth();
    const getUserInfo = async (id: string) => {
        const snapshot = await db.where("uid", '==', id).get();
        if (!snapshot.empty) {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
            });
        }
        else {
            return;
        }
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(getUserInfo(user.uid));
            <p>{userInfo.name}</p>
        } else {
            return;
        }
    });
    useEffect(() => {
        if (items == null) {
            getItems();
        }
    })

    const getItems = async () => {
        const data = await PostDataService.getAll();
        setItems(data);
    }

    if (items == undefined) {
        return <div>Loading... </div>
    }

    return (
        <div className='homepage'> <p className='title'>let's roll</p>
            <Logout></Logout>

            <div className='content'>
                <div className='left'>
                    <img className='plant' src={plant} alt='plant' />
                </div>
                <div className='right'>
                    <Shelf name='Students' items={items} isHome={true} />
                    <Shelf name='Dining Halls' items={items} isHome={true} />
                    <Shelf name='Restaurants' items={items} isHome={true} />
                </div>
            </div>
        </div>

    );


}

export default Home