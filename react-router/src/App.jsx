
import React, { use } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Nav from './components/Nav';


function App() {

  const [pageView, setPageView] = useState(0);
  const location = useLocation();
  useEffect(() => {
    setPageView((prev) => prev + 1);
  }, [location]);
  return (
    <div >
       


        <Nav />
        <Outlet />
        <p>page visits: {pageView}</p>
    </div>
  )
}

export default App