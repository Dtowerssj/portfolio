
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from 'motion/react';

import { styles } from "../styles";
import { github, document, websiteicon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projectCategories } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  documentation,
  live_url,
  live_icon
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 3) * 0.3, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        perspective={1500}
        scale={1}
        transitionSpeed={600}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end gap-1 m-3 card-img_hover'>

            {documentation && (<div
              onClick={() => window.open(documentation.url, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={document}
                alt='UML'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>)}
            

            {live_url && (<div
              onClick={() => window.open(live_url, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={live_icon || websiteicon}
                alt='demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>)}

            {source_code_link && (<div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>)}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <div key={tag.name} index={index} className={`flex justify-start items-center w-auto h-auto ${tag.color} rounded-xl`}>
              {tag.icon && <img src={tag.icon} alt="tech" className="w-4 h-4 mx-1" />}
              <span className={`text-white mr-2 ${tag.icon ? "" : "ml-2"}`}>{tag.name}</span>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {projectCategories.map((category) => (
        <div key={category.title} className='mt-20'>
          <h3 className='text-white font-bold sm:text-[32px] text-[26px]'>
            {category.title}
          </h3>
          <div className='mt-8 flex flex-wrap gap-7'>
            {category.projects.map((project, index) => (
              <ProjectCard
                key={`${category.title}-${project.name}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

// The projects section is far taller than the screen, so its cards animate in on their own as they
// scroll into view instead of waiting for a share of the whole section to be visible.
export default SectionWrapper(Works, "", "some");