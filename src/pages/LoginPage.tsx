import React from 'react';
import '../styles/Login.scss';
import Login from '../components/Login';
import Register from '../components/Register';
import Reset from '../components/Reset';
// import AddTutorial from "./components/add-tutorial.component";
import AddPost from "../components/add-post.component";
import TutorialsList from "../components/tutorials-list.component";


const LoginPage = () => {
    return (
        <>
        <div className='card'>
            <p className='logo'>let's roll</p>
            <p className = 'email'>email address</p>
            <p className = 'pw'>password</p>
        </div>
        </>
    )
}

export default LoginPage;