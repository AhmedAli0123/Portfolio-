
// import { NavItem, UserObject,} from "./models/User"
import { NavItem,UserObject } from "../models/User"



export const userInfo: UserObject = {
    name: "Ahmed Ali",
    
    picture: "/Profile Pic.jpg", // Corrected the image path

    heading: ` I&#39;m a student passionate about both Front-end and Back-end development. As part of the Governor&#39;s Initiative for Generative AI and the Presidential Initiative for Cloud Native Generative AI, I am learning the latest technologies in the field. I have experience with HTML, CSS, TypeScript, JavaScript, Python, Next.js, React, and Tailwind CSS.`,
    
    about: `
        <p>Hi! I&#39;m Ahmed Ali, a dedicated professional in the field of Full Stack Development. I specialize in Web Development/ UI /UX Design and have a passion for creating many projects that make a difference. My journey in Development has been shaped by my love for innovation, problem-solving, and attention to detail.</p>
        <p>Over the past 1 years, I&#39;ve honed my skills working on projects ranging from [example 1] to [example 2], always striving to exceed expectations. Whether I&#39;m collaborating with a team or working independently, I take pride in delivering high-quality results that reflect both creativity and strategic thinking.</p>
        <p>When I&#39;m not [working on your craft], I enjoy [hobby or personal interest], which helps keep my mind fresh and inspired for new challenges. </p>
        `,
    
        skills: ['React', 'Next-JS',  'JavaScript', 'TypeScript', 'Python', 'TailWind-CSS',  'Bootstrap',  'Docker', 'HTML', 'CSS'],
}

export const headerItem: NavItem ={
    home:{label:"Home" , page: "home"},
    about:{label:"About" , page: "about"},
    skills:{label:"Skills" , page: "Skills"},
    projects:{label:"Projects" , page: "projects"},
    contact:{label:"Contact" , page: "contact"}
}



export const data =[
    {
        id:0,
        title:"Edcuate Web Page",
        desc:"Create a Fully Responsive website using HTML, CSS and JavaScript ",
        image: '/Responsive Site.png',
        tags:["HTML", "CSS", "JavaScript"],
        url:"https://fully-responsive-website-jlgc.vercel.app/"
    },
    {
        id:1,
        title:"Panacloud",
        desc:"Create a Panacloud Website using HTML, CSS and JavaScript ",
        image: '/panacloud.png',
        tags:["HTML", "CSS", "JavaScript"],
        url:"https://giaic-pana-cloud-website.vercel.app/"
    },
    {
        id:2,
        title:"Resume Builder",
        desc:"This is hackathon project to build a Resume Builder with the help of HTML , CSS , TypeScript",
        image: '/Hackathon.png',
        tags:["HTML" ,"CSS"  , "TypeScript"],
        url:"https://hackathon-project-miles-stone-05-resume-builder.vercel.app/"
    },
    {
        id:3,
        title:"Figma Design",
        desc:"Restrucutre the Figma design into Next Js and Tailwind",
        image: '/Figma-assin1.png',
        tags:["Next Js", "React","Tailwind CSS", ],
        url:"https://figma-to-code-in-nextjs.vercel.app/"
    },
    {
        id:4,
        title:"Count Down Timer",
        desc:"Create Count Down Timer Using Next Js",
        image: '/Countdown TImer.png',
        tags:["React", "Next Js" ,"Tailwind CSS"],
        url:"https://count-down-timer-alpha-beige.vercel.app/"
    },
    {
        id:5,
        title:"Todo List",
        desc:"Create a Todo-list with the help of HTML, CSS and TypeScript",
        image: '/todo-list.png',
        tags:["HTML" ,"CSS", "TypeScript"],
        url:"https://todo-list-sigma-bay-62.vercel.app/"
    },
    {
        id:6,
        title:"Currency Converter",
        desc:"This is CLI Currency Converte which is a project of typscript using inquirer",
        image: '/currency.png',
        tags:["TypeScript" ,"Node-JS", "Inquirer"  ],
        url:"https://github.com/AhmedAli0123/Currency-Converter.git"
    },
    {
        id:7,
        title:"Student Mangment System",
        desc:"This is CLI Mangement System which is a project of typscript using inquirer",
        image: '/student.jpeg',
        tags:["TypeScript" ,"Node-JS", "Inquirer"  ],
        url:"https://github.com/AhmedAli0123/Student-Managment-System.git"
    },
]
