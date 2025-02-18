import React from 'react';
import { headerItem } from '../constans/constant';
import Heading from './Heading';
import Cards from './Cards';
import { client } from '@/sanity/lib/client';
import { project } from '../models/User';




const Projects: React.FC = async () => {
  const groq:project[] =await client.fetch(
    `*[_type== "project"] | order(_createdAt asc){
      title,
      desc,
      "imageUrl":image.asset->url,
      tags,
      url
    }`
  )
  return (
    <section
      id={headerItem.projects.page}
      className='flex flex-col text-center justify-center mt-[350px] md:mt-[100px] items-center'
    >
      <div>
        <Heading title='Projects'/>
        <div className='grid gap-10 xl:gap-7 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {groq.map((el:project)=>
            ( <Cards 
            key={el._id}
            title={el.title}
            desc={el.desc}
            img={el.imageUrl}
            tags={el.tags}
            url={el.url}
            />)
            )
          }
        </div>
      </div>

    </section>
);
};

export default Projects;
