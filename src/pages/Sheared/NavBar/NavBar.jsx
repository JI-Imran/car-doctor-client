import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
      })
      .catch(error => console.log(error))
  }

  const navItems =
    <>
      <li><Link className='text-xl font-semibold' to='/' href="">Home</Link></li>
      <li><Link className='text-xl font-semibold' to='/about' href="">About</Link></li>

      {
      user?.email ?
        <>
          <li><Link className='text-xl font-semibold' to='/bookings' href="">My Bookings</Link></li>
          <li><button onClick={handleLogOut}>LogOut</button></li>
        </>
        : <li><Link className='text-xl font-semibold' to='/login' href="">Login</Link></li>
      }
      
    </>

  return (
    <div className="navbar bg-base-100 h-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl ">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className='btn btn-outline text-lg font-bold btn-warning'>Get Started</button>
      </div>
    </div>
  );
};

export default NavBar;