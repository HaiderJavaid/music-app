import React from 'react'
import './sidebar.css'
import homeIcon from '/Users/aminnaim/Desktop/ReactProject/music-app/src/assets/home.svg'
import playlist from '/Users/aminnaim/Desktop/ReactProject/music-app/src/assets/playlist.svg'
import playlistGlow from '/Users/aminnaim/Desktop/ReactProject/music-app/src/assets/playlistGlow.svg'
import radio from '/Users/aminnaim/Desktop/ReactProject/music-app/src/assets/radio.svg'
import videos from '/Users/aminnaim/Desktop/ReactProject/music-app/src/assets/videos.svg'
import profile from '/Users/aminnaim/Desktop/ReactProject/music-app/src/assets/profile.svg'
import logout from '/Users/aminnaim/Desktop/ReactProject/music-app/src/assets/Logout.svg'



const Sidebar = () => {
  return (
   
<div>

    <div className='sidebar'>
    <div className="sidebar-icons">
        <img className='single-icon' src={playlist} alt="" />
        <img className='single-icon' src={playlist} alt="" />
        <img className='single-icon' src={radio} alt="" />
        <img className='single-icon' src={videos} alt="" />
      </div>
    </div>
    <div className='sidebar-user'>
    <div className="sidebar-icons">
        <img className='single-icon' src={profile} alt="" />
        <img className='single-icon' src={logout} alt="" />    
      </div>
      </div>


</div>
    
  )
}

export default Sidebar