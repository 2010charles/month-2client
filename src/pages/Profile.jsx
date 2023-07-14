import React from 'react';
import profile1 from '../projectImages/profileimage.png';
import './profile.css'

function Profile() {
  return (
    <div className='profileHomepage'>
      <div className='profileInformation'>
        <div className='profileimage'>
          <img src={profile1} height={150} alt='profileimage' />
        </div>
        <div className='profileDetails'>
          <h5 className='profiletext FullName'>Name:Charles Mungai</h5>
          <p className='profiletext Email'>Email:charlesmungai2015@gmail.com</p>
          <p className='profiletext Gender'>Gender:Male</p>
        </div>

      </div>
      <div className='Alltaskdiv'>
        <div className='task1'>
          <div className='taskAssingdiv'>
            <p className='task1'>ProjectName:Figma Desing On Frontend Development</p>
            <p className='participates'>Participates</p>
            <p className='due-date'>Due dat: 12-05-2025</p>
          </div>
          <div className='taskbuttons'>
            <button className='ED editbutton'>EDIT</button>
            <button className='ED deletebutton'>DELETE</button>
          </div>
        </div>
        <div className='task2'>
          <div className='taskAssingdiv'>
            <p className='task1'>ProjectName:Figma Desing On Frontend Development</p>
            <p className='participates'>Participates</p>
            <p className='due-date'>Due dat: 12-05-2025</p>
          </div>
          <div className='taskbuttons'>
            <button className='ED editbutton'>EDIT</button>
            <button className='ED deletebutton'>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
