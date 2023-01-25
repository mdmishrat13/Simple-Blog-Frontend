import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../middlewares/contextHooks';

const UserRoute = ({children}) => {
    const {isAuthenticated,checkAuthenticated}= useAuth()
    checkAuthenticated()
    if(!isAuthenticated){
       return <Navigate to='/login' replace={true}/>
    }
    return children
};

export default UserRoute;