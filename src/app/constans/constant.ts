

import { NavItem,UserObject } from "../models/User"



export const userInfo: UserObject = {
    name: "Ahmed Ali",
    
    picture: "/Profile Pic.jpg", 

    heading: ` I&#39;m a student passionate about both Front-end and Back-end development. As part of the Governor&#39;s Initiative for Generative AI and the Presidential Initiative for Cloud Native Generative AI, I am learning the latest technologies in the field. I have experience with HTML, CSS, TypeScript, JavaScript, Python, Next.js, React, and Tailwind CSS.`,
    
    about: `
        <p>Hi! I&#39;m Ahmed Ali, a dedicated professional in the field of Full Stack Development. I specialize in Web Development/ UI /UX Design and have a passion for creating many projects that make a difference. My journey in Development has been shaped by my love for innovation, problem-solving, and attention to detail.</p>
        <p>Over the past 1 years, I&#39;ve honed my skills working on projects ranging from [example 1] to [example 2], always striving to exceed expectations. Whether I&#39;m collaborating with a team or working independently, I take pride in delivering high-quality results that reflect both creativity and strategic thinking.</p>
        <p>When I&#39;m not [working on your craft], I enjoy [hobby or personal interest], which helps keep my mind fresh and inspired for new challenges. </p>
        `,
    
        skills: ['React', 'Next-JS', 'Sanity', "Headless CMS" ,  'JavaScript', 'TypeScript', 'Python', 'TailWind-CSS',  'Bootstrap',  'Docker', 'HTML', 'CSS'],
}

export const headerItem: NavItem ={
    home:{label:"Home" , page: "home"},
    about:{label:"About" , page: "about"},
    skills:{label:"Skills" , page: "Skills"},
    projects:{label:"Projects" , page: "projects"},
    contact:{label:"Contact" , page: "contact"}
}




