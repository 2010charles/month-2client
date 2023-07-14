import React from 'react'
import './teams.css'
function Teams() {
  return (
    <div className='teamMainPage'>
    <div className='allTask'><p className='allTask'>ALL TASK</p></div>
      <div className='teamsdivs'>
        <div className='TaskDetailsDiv'>
          <p className='participant1'>participant1:Charles Mungai</p>
          <p className='projectName1'>projectName1:Backend Development</p>
          <p className='dueDate1'>DueDate:12-09-2023</p>
        </div>
      </div>
      <div className='addTaskButtonTeams'><p className='addtaskbtn'>ADD TASK +</p></div>
    </div>
  )
}

export default Teams
