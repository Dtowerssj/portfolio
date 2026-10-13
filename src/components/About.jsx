import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'motion/react'

import {styles} from '../styles'
import {services} from '../constants/constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='w-full'>
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1, 
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer turned IT leader. At Atlanta Computer Pros, a
        Microsoft-focused MSP in Atlanta, I lead service delivery for a
        portfolio of client organizations and build the automation that keeps
        them running: Azure Functions on the Microsoft Graph API, PowerShell at
        scale, and AI agents in Copilot Studio and Azure AI Foundry. My
        background in React, React Native and Node.js means I don't stop at
        configuration — when the right tool doesn't exist, I build it. I also
        speak at Microsoft 365 community events about Copilot Studio and AI
        automation.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> 
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")