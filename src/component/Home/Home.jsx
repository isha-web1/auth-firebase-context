import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1> this is home page{user && <span>{user.displayName}</span>  }</h1>
        </div>
    );
};

export default Home;