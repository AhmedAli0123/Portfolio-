"use client"
import React from 'react';
import { headerItem, userInfo} from '../constans/constant';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section
      id={headerItem.about.page}
      className='text-white h-screen flex flex-col mt-[400px] text-center justify-center items-center md:flex-row md:mt-1 md:text-start'
    >
      <div className='m-4 md:ml-20 sm:ml-12 md:w-1/2'>
        <h1 className='text-6xl my-6 font-bold'>About</h1>
        <h2 className='text-3xl my-4 text-pink-700'>Get to know me!</h2>

        
    
        <p>Hi! I&#39;m <b>Ahmed Ali</b>, a dedicated professional in the field of <b><span className='text-pink-700'> Full Stack Development</span></b>. I specialize in <b>Gen AI/ Web Development/ UI /UX Design</b> and have a passion for creating many projects that make a difference. My journey in Development has been shaped by my love for innovation, problem-solving, and attention to detail.</p><br />
        <p>Over the past 1 years, I&#39;ve honed my skills working on projects ranging from <b>CLI Application</b> like an <b><span className='text-pink-600'>ATM machine, Student Management System, Word Counter, and Currency Converter</span></b> (built using TypeScript) to Creating many website with the help of HTML CSS and TypeScript like <b><span className='text-pink-600'>Amazon Clone, Gaming site ,Shoes Escape</span></b> and Also create a <b><span className='text-pink-600'>TODO-List</span></b>, always striving to exceed expectations. Whether I&#39;m collaborating with a team or working independently, I take pride in delivering high-quality results that reflect both creativity and strategic thinking.</p><br />
        <p>When I&#39;m not <b><span className='text-pink-700'>Cloud Native and Generative AI development</span></b>, I enjoy in coding and cricket, which helps keep my mind fresh and inspired for new challenges. </p>
          
        
      </div>
      <div 
        id={headerItem.skills.page}
        className='flex flex-col justify-center items-center text-center'>

        <Image
          src={userInfo.picture}
          alt='Profile Picture'
          height={300}
          width={300}
          className='rounded-full mt-auto '
        />

        <h2 className='text-3xl my-4 text-white font-bold'>Skills</h2>
        <div 
        className='mt-3 w-3/4 break-words' data-aos="zoom-in-up">
          {userInfo.skills.map((skill, index) => (
            <span key={index} className='bg-pink-500 m-1 p-2 text-sm inline-block text-black font-bold rounded-md
                hover:bg-gray-400 cursor-pointer  transition-transform duration-200 ease-in transform hover:scale-110'>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
