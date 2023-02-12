import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../middlewares/contextHooks';

const UserRoute = ({children}) => {
    const {isAuthenticated,checkAuthenticated,isAuthLoading}= useAuth()
    if(isAuthLoading){
        return <h1>Loading</h1>
    }
    console.log('consoling isloading',isAuthLoading)
    if(!isAuthenticated){
       return <Navigate to='/login' replace={true}/>
    }
    return children
};

export default UserRoute;