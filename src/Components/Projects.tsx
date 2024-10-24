"use client"
import React from 'react';
import { headerItem} from '@/constans/constant';
import {data} from '@/constans/constant'
import Heading from './Heading';
import Cards from './Cards';




const Projects: React.FC = () => {
  return (
    <section
      id={headerItem.projects.page}
      className='text-white  flex flex-col text-center justify-center mt-[350px] md:mt-[100px] items-center'
    >
      <div>
        <Heading title='Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {data.map((el)=>
            ( <Cards 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.image}
            tags={el.tags}
            />)
            )
          }
        </div>
      </div>

    </section>
);
};

export default Projects;