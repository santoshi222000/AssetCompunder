import React from 'react'

import Sidebaradmin from '../admin/Sidebaradmin'
import Userboard from '../admin/Userboard'

function User() {
  return (
    <div className='dashboard'>
        <Sidebaradmin/>
         <Userboard/>
    </div>
  )
}

export default User
