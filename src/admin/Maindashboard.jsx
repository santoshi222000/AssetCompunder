import React from 'react'
import './maindashboard.css'
import Upperboard from './Upperboard'
import Lowerboard from './Lowerboard'
import { user } from '../AdminData'

function Maindashboard() {
  return (
    <div className='maindashboard'>
      <Upperboard/>
      <Lowerboard />
    </div>
  )
}

export default Maindashboard
