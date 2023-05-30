import React from 'react'
import Sidebaradmin from '../admin/Sidebaradmin'
import Maindashboard from '../admin/Maindashboard'
import "./dashboard.css"

function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebaradmin/>
      <Maindashboard/>
    </div>
  )
}

export default Dashboard
