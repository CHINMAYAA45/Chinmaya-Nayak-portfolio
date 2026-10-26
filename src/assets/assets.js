import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaNetworkWired } from 'react-icons/fa';

import profileImg from '../assets/IMG_20260304_174405.jpg';
import projectImg1 from '../assets/project1.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import paysphereImg from '../assets/paysphere.png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];


export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'React JS', 'Angular']
  },
  {
    title: 'Backend Development',
    icon: FaNodeJs,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Java', 'Spring Boot']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS Code', 'Eclipse', 'CPT']
  },
  {
    title: 'Computer Networks',
    icon: FaNetworkWired,
    description: 'Core networking concepts and protocols.',
    tags: ['CNS', 'OSI', 'HTTP/HTTPS', 'Routing', 'Switching']
  }
];


export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "PaySphere – HR & Payroll Management System",
    description: "Full-stack HR and payroll system with role-based access for Admin, HR and Employee users: employee management, attendance check-in/out, leave requests with balances and approvals, monthly payroll with printable payslips, and a live dashboard.",
    image: paysphereImg,
    tech: ["React", "Tailwind CSS", "Java", "Spring Boot", "JWT", "PostgreSQL", "Docker"],
    icons: [FaReact, FaServer, FaDatabase],
   demo: "https://github.com/CHINMAYAA45/Paysphere#readme",
   code: "https://github.com/CHINMAYAA45/Paysphere",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects, skills and work experience.",
    image: projectImg4,
    tech: ["React", "Vite", "Tailwind CSS"],
    icons: [FaReact],
    demo: "https://chinmaya-nayak-portfolio.vercel.app",
    code: "https://github.com/CHINMAYAA45/Chinmaya-Nayak-portfolio",
  },
];


export const workData = [
 
  {
    role: "AWS INTERN",
    company: "Amazon AWS",
    duration: "June 2024 -  July 2024",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Data Science Intern",
    company: "Evoastra Ventures",
    duration: "July 2024 - September 2024",
    description:
      "Applied Python for data preprocessing, analysis, and visualization. Built a Car Market Analysis project and bank database from scraping and analyzing listings to identify pricing trends, Loans etc.",
    color: "blue"
  }
];