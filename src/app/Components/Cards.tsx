import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface propsType{
    title:string,
    desc: string,
    img: string,
    tags : Array<string>
    url: string
}


const Cards:React.FC<propsType> = ({title, desc ,img ,tags, url}) => {
  return (
    <div className='border border-pink-600 rounded-md w-[300px] sm:w[350px] ms ' data-aos="zoom-in-up">
        <div data-aos="flip-left">
            <Image 
                className='w-[300px] sm:w[350px] h-auto rounded-md'
                src={img}
                width={350}
                height={350}
                alt={title}
                data-aos="flip-left"
            />
        </div>

        <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight'>{title}</div>
            <div>{desc}</div>
            <div className='grid grid-cols-2 gap-2'>
                {tags.map((el)=>(
                    <div className='tags bg-pink-700' key={el}> 
                        {el}
                    </div>))
                }
            </div>
            <div>
                    <Link href={url} target='_blank' >
                        <Button className='mt-6 w-28 h-10 bg-pink-700 text-white rounded-md hover:bg-pink-800
                            transition-transform duration-200 ease-in transform hover:scale-105'>View Project</Button>
                    </Link>
                </div>
        </div>


    </div>
  )
}

export default Cards