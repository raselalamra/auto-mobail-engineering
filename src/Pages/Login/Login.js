import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signINUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signINUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;