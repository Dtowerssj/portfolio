
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { AnimatePresence, motion } from 'motion/react';

import ImageViewer from "./ImageCarousel";
import { styles } from "../styles";
import { github, document, websiteicon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projectCategories } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  year,
  description,
  tags,
  image,
  images,
  source_code_link,
  documentation,
  live_url,
  live_icon
}) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const gallery = images && images.length > 0 ? images : [image];

  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 3) * 0.3, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1500}
        scale={1}
        transitionSpeed={600}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div
          className='relative w-full h-[230px] cursor-zoom-in'
          role='button'
          tabIndex={0}
          aria-label={`View ${name} images`}
          onClick={() => setViewerOpen(true)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setViewerOpen(true)}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end gap-1 m-3 card-img_hover'>

            {documentation && (<div
              onClick={(e) => { e.stopPropagation(); window.open(documentation.url, "_blank"); }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={document}
                alt='UML'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>)}
            

            {live_url && (<div
              onClick={(e) => { e.stopPropagation(); window.open(live_url, "_blank"); }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={live_icon || websiteicon}
                alt='demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>)}

            {source_code_link && (<div
              onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
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
          <div className='flex items-start justify-between gap-3'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            {year && (
              <span className='shrink-0 mt-2 px-2.5 py-0.5 rounded-full border border-[#915eff]/40 bg-black-200 text-secondary text-[12px] font-medium tracking-wider'>
                {year}
              </span>
            )}
          </div>
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

      <ImageViewer
        images={gallery}
        title={name}
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </motion.div>
  );
};

const countProjects = (category) =>
  category.projects
    ? category.projects.length
    : category.children.reduce((sum, child) => sum + countProjects(child), 0);

const collectDefaults = (categories, acc = {}) => {
  categories.forEach((category) => {
    acc[category.title] = Boolean(category.defaultOpen);
    if (category.children) collectDefaults(category.children, acc);
  });
  return acc;
};

const Chevron = ({ open }) => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <path d='M6 9l6 6 6-6' />
  </svg>
);

// A collapsible category: cards when it has projects, nested categories when it has children.
const CategoryBlock = ({ category, level, openState, onToggle }) => {
  const open = openState[category.title];
  const [clip, setClip] = useState(false);
  const total = countProjects(category);
  if (total === 0) return null;

  return (
    <div className={level === 1 ? "mt-14" : "mt-10"}>
      <h3 className='m-0'>
        <button
          type='button'
          aria-expanded={open}
          onClick={() => onToggle(category.title)}
          className={`group flex w-full items-center gap-3 text-left cursor-pointer border-b pb-3 transition-colors ${
            level === 1 ? "border-white/10 hover:border-[#915eff]/50" : "border-white/5 hover:border-[#915eff]/40"
          }`}
        >
          <span
            className={`text-white font-bold ${
              level === 1 ? "sm:text-[32px] text-[26px]" : "sm:text-[26px] text-[22px]"
            }`}
          >
            {category.title}
          </span>
          <span className='px-2.5 py-0.5 rounded-full border border-[#915eff]/40 bg-black-200 text-secondary text-[12px] font-medium tracking-wider'>
            {total}
          </span>
          <span className='ml-auto text-secondary group-hover:text-white transition-colors'>
            <Chevron open={open} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key='panel'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onAnimationStart={() => setClip(true)}
            onAnimationComplete={() => setClip(false)}
            className={clip ? "overflow-hidden" : ""}
          >
            {category.projects ? (
              <div className='mt-8 flex flex-wrap gap-7'>
                {category.projects.map((project, index) => (
                  <ProjectCard
                    key={`${category.title}-${project.name}`}
                    index={index}
                    {...project}
                  />
                ))}
              </div>
            ) : (
              <div className={level === 1 ? "pl-0 sm:pl-6" : ""}>
                {category.children.map((child) => (
                  <CategoryBlock
                    key={child.title}
                    category={child}
                    level={level + 1}
                    openState={openState}
                    onToggle={onToggle}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Works = () => {
  const [openState, setOpenState] = useState(() => collectDefaults(projectCategories));
  const toggle = (title) => setOpenState((state) => ({ ...state, [title]: !state[title] }));

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
        <CategoryBlock
          key={category.title}
          category={category}
          level={1}
          openState={openState}
          onToggle={toggle}
        />
      ))}
    </>
  );
};

// The projects section is far taller than the screen, so its cards animate in on their own as they
// scroll into view instead of waiting for a share of the whole section to be visible.
export default SectionWrapper(Works, "", "some");