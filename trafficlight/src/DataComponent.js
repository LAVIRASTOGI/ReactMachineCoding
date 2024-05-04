import React from 'react'
import logo from './images/techdevgurulogo.PNG'

function DataComponent({topicTitle}) {
  return (
    <div className='h-auto flex flex-col items-center gap-4 pt-16'>
        <img src={logo}  alt='techDevGuru' className='w-24 h-auto' />
        <h1 className='text-2xl uppercase font-bold underline'>{topicTitle}</h1>
    </div>
  )
}

export default DataComponent