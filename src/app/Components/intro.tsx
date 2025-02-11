import React from 'react'
import { headerItem, userInfo } from '../constans/constant'
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'

const Intro: React.FC = () => {
  
  const handleShowResume = () => {
    window.open("/CV.pdf", "_blank")
  }

  return (
    <section 
      id={headerItem.home.page} 
      className='h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start md:mt-9'
    >
      {/* For Image */}
      <div>
        <Image 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          src={userInfo.picture}
          alt='Profile Picture'
          height={300}
          width={300}
          className='shadow-2xl rounded-full mt-32 md:mt-10'
        />
      </div>

      {/* For Text */}
      <div className='md:ml-20 sm:ml-12 md:w-1/2'>
        <h1 className='text-7xl uppercase hidden md:block text-black dark:text-pink-700 font-bold' data-aos="fade-right">
          Full Stack Developer
        </h1>
        
        <h1 className='text-2xl mt-5 md:text-3xl'>
          Hello, I&#39;m a {" "}
          <span className='text-pink-700 text-3xl uppercase md:text-4xl inline-flex'>
            <TypewriterComponent
              options={{
                strings: [
                  userInfo.name,
                  "Web Developer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <p className='mt-4 mb-4'>
          I&#39;m a student passionate about both <span className='font-bold text-pink-700'>Front-end and Back-end development</span>.
          As part of the Governor&#39;s Initiative for 
          Generative AI and the Presidential Initiative for Cloud Native Generative AI, I am learning the latest technologies 
          in the field. I have experience with <span className='font-bold text-pink-700'>HTML</span>, <span className='font-bold text-pink-700'>CSS</span>, <span className='font-bold text-pink-700'>TypeScript</span>, <span className='font-bold text-pink-700'>JavaScript</span>, <span className='font-bold text-pink-700'>Python</span>, <span className='font-bold text-pink-700'>Next.js</span>, <span className='font-bold text-pink-700'>React</span>, and <span className='font-bold text-pink-700'>Tailwind CSS</span>.
        </p>

        <button className='w-28 h-10 bg-pink-700 text-white rounded-md hover:bg-pink-800 transition-transform duration-200 ease-in transform hover:scale-105' onClick={handleShowResume}>
          View Resume
        </button>
      </div>
    </section>
  )
}

export default Intro
