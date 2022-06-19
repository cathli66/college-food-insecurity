import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../styles/Login.scss'
import rollcake from '../media/roll-cake.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user)
      navigate("/home");
  }, [user, loading]);
  return (
    <div className='logincard'>
      <div className='logo'>
        <p className='logotitle'>let's roll</p>
        <img src={rollcake} className='logoimg' />
      </div>
      <div className="login">
        <div className="login__container">
          <p className='custlabel'>email address</p>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email address"
          />
          <p className='custlabel'>password</p>
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
          <div>
            <Link className='forgpw' to="/reset">forgot password?</Link>
          </div>
          <div>
            <button
              className="login__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              sign in
            </button>
          </div>
          <div className="register">
            don't have an account? <Link className='reglink' to="/register">register now!</Link>
          </div>
          <hr
            style={{
              height: '0.5px',
              color: '#986649',
              backgroundColor: '#986649',
            }} />
          <div className="orsignin">
            or sign in with
          </div>
          <div>
            <button className="login__btn login__google" onClick={signInWithGoogle}>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;