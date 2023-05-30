import React from 'react'
import Sidebaradmin from '../admin/Sidebaradmin'
import ShowAllCourses from '../admin/ShowAllCourses'
import AddContent from '../admin/AddContent'

function Chapter() {
  return (
    <div>
       <div className='dashboard'>
        <Sidebaradmin/>
        <AddContent/>
    </div>
    </div>
  )
}

export default Chapter