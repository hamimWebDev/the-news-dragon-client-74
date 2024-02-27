import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import LeftSNav from './LeftSNav/LeftSNav';
import RightNav from './RightNav/RightNav';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                   <LeftSNav></LeftSNav>
                </div>
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'>
                    <RightNav></RightNav>
                </div>
            </div>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;