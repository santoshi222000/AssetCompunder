import React from 'react'
import Sidebaradmin from '../admin/Sidebaradmin'
import ShowAllCourses from '../admin/ShowAllCourses'

function AllCourses() {
  return (
    <div>
       <div className='dashboard'>
        <Sidebaradmin/>
        <ShowAllCourses/>
    </div>
    </div>
  )
}

export default AllCourses
