import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div>
      <ul className='sidebarLinks'>
        <li><Link to='/dashboard'>Home</Link></li>
        <li><Link to='/dashboard/profile'>profile</Link></li>
        <li><Link to='/dashboard/mytask'>mytask</Link></li>
        <li><Link to='/dashboard/teams'>Teams</Link></li>
        <li><Link to='/dashboard/completed'>completed</Link></li>
        <li><Link to='/dashboard/logout'>logout</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
