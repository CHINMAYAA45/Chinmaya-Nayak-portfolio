import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from "./projectCard";
import { projects } from "../assets/assets.js";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font bold text-center mb-4'>
          My
          <span className='text-purple'>Projects</span>

        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A Section Of My Recent Work</p>
        <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {/* project card*/}
        {
        projects.map((project, index)=>(
        <ProjectCard key={index} {...project}/>
           ))

        }
        </div>   
        <div className='text-center mt-12'>
            <a href='#'>
                <span>View More Projects</span>
                <FaArrowRight />
            </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects