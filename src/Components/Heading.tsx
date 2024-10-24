import React from 'react'
import {propsType} from '@/models/User'

const Heading:React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center pb-8'>
        <p className='text-6xl my-6 font-bold'>{title}</p>
    </div>
  )
}

export default Heading