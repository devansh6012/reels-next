import React from 'react'
import Navbar from './Navbar'

function ProfileComp() {
    return (
        <div>
            <Navbar />
            <div>
                <div className='profile_upper'>
                    <img src='' style={{height:"8rem",width:"8rem",borderRadius:"50%"}}/>
                    <div style={{flexBasis:"40%"}}>
                        <h1>Name</h1>
                        <h3>Posts : 10</h3>
                    </div>
                </div>
                <hr />
                <div className='profile_videos'>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileComp