import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
      <div>
        <ul className='navbar'>   
        <li><NavLink className='nvlink' to="/">Home</NavLink></li>
        <li><NavLink className='nvlink' to="/about">About</NavLink></li>
        <li><NavLink className='nvlink' to="/datatable">Datatable</NavLink></li>
        <li><NavLink className='nvlink' to="/tabledata">Tabledata</NavLink></li>
        <li><NavLink className='nvlink' to="/chart">Chart</NavLink></li>
        <li><NavLink className='nvlink' to="/user/nilesh">Nilesh</NavLink></li>
        <li><NavLink className='nvlink' to="/user/nill">Nill</NavLink></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;