import React from 'react'
import Sidebaradmin from '../admin/Sidebaradmin'
import AllCourseAdmin from '../admin/AddCourseAdmin'

function AllCourses() {
  return (
    <div className='dashboard'>
        <Sidebaradmin/>
        <AllCourseAdmin/>
    </div>
  )
}

export default AllCourses
