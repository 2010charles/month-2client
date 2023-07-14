import React from 'react'
import './homedashboard.css'

function Homedashboard() {
  return (
    <div className='HomeDashboardMainPage'>
      <h4 className='header1'>Welcome To Our Task Manager</h4>
      <div className='homepagediv1'>
        <p className='to-do'>TO-DO</p>
        <div className='homepagediv2'><p className='alltasks'>ALL TASKS</p></div>
        <div className='homepagediv3'>
          <p className='projectname'>ProjectName:Frontend Development</p>
          <p className='edit'>EDIT</p>
        </div>
        <div className='addTask'>
        <button className='addTaskButton'>ADD NEW TASK +</button>
        </div>
      </div>

    </div>
  )
}

export default Homedashboard
