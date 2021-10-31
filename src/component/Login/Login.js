import React from 'react';
import useAuth from '../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';

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
        })
        
    }
    return (
        <div>
            <h1>Login</h1>

            <button onClick={handleGoogleSignin}>Google Loging</button>

        </div>
    );
};

export default Login;