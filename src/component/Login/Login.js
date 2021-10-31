import React from 'react';
import useAuth from '../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const {signInUseGoogle} = useAuth();

    const location = useLocation()
    const history = useHistory()

    const redirectUrl = location.state?.from || '/'

    const handleGoogleSignin = () => {
        signInUseGoogle()
        .then(result =>{
            history.push(redirectUrl);
            console.log(result.user);
        }).catch(error => {
            console.log(error.message);
        })
        
    }
    return (
        <div>
            <div className="login">
                <p>Please Login Hare </p>
            <button className="google-btn" onClick={handleGoogleSignin}> <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Login" /></button>
            </div>


        </div>
    );
};

export default Login;