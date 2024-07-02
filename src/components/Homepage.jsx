import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div>
        <div className='text-center p-5 fs-5 fw-bold d-flex justify-content-evenly border-bottom  shadow'>
          <Link className='link-offset-3' to="/">ALL</Link>&nbsp;&nbsp;
          <Link className='link-offset-3' to="/fsd">FULLSTACK DEVELOPEMENT</Link>&nbsp;&nbsp;
          <Link className='link-offset-3' to="/datascience">DATA SCIENCE</Link>&nbsp;&nbsp;
          <Link className='link-offset-3' to="/cybersecurity">CYBER SECURITY</Link>&nbsp;&nbsp;
          <Link className='link-offset-3' to="/career">CAREERS</Link>&nbsp;&nbsp;
        </div>               
                    
        <Outlet />
    </div>
  )
}

export default Homepage