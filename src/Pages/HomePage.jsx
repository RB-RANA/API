import React from 'react'
import Slider from '../Component/Slider'
import Home from '../Component/Home'

const HomePage = () => {
  return (
    <div >
        
        <div className='Homeslider pb-2'>
            <Slider/>
        </div>
        <div className='pb-3'>
        <Home/>
        </div>
    </div>
  )
}

export default HomePage