import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './navigationBar';

function MainLayout() {
  return (
    <>
      <Outlet />
      <NavigationBar />
    </>
  );
}

export default MainLayout;
