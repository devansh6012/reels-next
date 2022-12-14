import { Avatar } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Feed() {
  return (
    <div className='feed-container'>
        <Navbar/>
        <Upload/>

        <div className='videos-container'>
          <div className='post-container'>
            <video src=""/>
            <div className="videos-info">
              <div className='avatar-container'><Avatar alt="Remy Sharp" src="" sx={{margin:"0.5rem"}} /> <p>Name</p> </div>
              <div className='post-like'>
                <FavoriteIcon fontSize='large'/> 10
              </div>
            </div>
          </div>


          <div className='post-container'>
            <video src=""/>
          </div>

        </div>
    </div>
  )
}

export default Feed