import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="bg-sky-900 text-white">
       <Link to="/adminPage">Admin Dashboard</Link>
    </div>
  )
}
