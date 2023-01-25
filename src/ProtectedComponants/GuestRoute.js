import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../middlewares/contextHooks';

const GuestRoute = ({children}) => {
    const {isAuthenticated,checkAuthenticated}= useAuth()
    checkAuthenticated()
    if(isAuthenticated){
       return <Navigate to='/user' replace={true}/>
    }
    return children
};

export default GuestRoute;