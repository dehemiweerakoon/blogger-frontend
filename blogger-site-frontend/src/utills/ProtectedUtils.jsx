/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../pages/footer/Footer';

const ProtectedUtils = () => {

    const token = sessionStorage.getItem('token');
   // const nav = useNavigate();
    const getTokenFiler=()=>{
      //
      console.log(token+"is  not provided in here ... this need to identified..");

    }

    if(!token){
    return(
      <Navigate to={'/login'}/>
    )
    }
  return (
    <>
    <Outlet/>
   <Footer/>
    </>
  )
}

export default ProtectedUtils