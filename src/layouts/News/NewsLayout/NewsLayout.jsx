import React from 'react';

import { Outlet } from 'react-router-dom';


import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import RightNav from '../../RightNav/RightNav';

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-12">
        
        <div className="col-span-9">
          <Outlet></Outlet>
        </div>
        <div className="col-span-3">
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

export default NewsLayout;
