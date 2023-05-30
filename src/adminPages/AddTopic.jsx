import React from 'react'
import Sidebaradmin from '../admin/Sidebaradmin'
import AddCourseChapterTopic from '../admin/AddCourseChapterTopic'

function AddTopic() {
  return (
    <div>
       <div className='dashboard'>
        <Sidebaradmin/>
        <AddCourseChapterTopic/>
    </div>
    </div>
  )
}

export default AddTopic
