import React from 'react'
import Sidebaradmin from '../admin/Sidebaradmin'
import AllCourseAdmin from '../admin/AddCourseAdmin'
import ChapterContent from '../admin/ChapterContent'

function AddCourseChapter() {
  return (
    <div className='dashboard'>
        <Sidebaradmin/>
        <ChapterContent/>
    </div>
  )
}

export default AddCourseChapter
