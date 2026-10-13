import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";

import { styles } from "../styles";
import { talks } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Pill = ({ children }) => (
  <span className='px-2.5 py-0.5 rounded-full border border-[#915eff]/40 bg-black-200 text-secondary text-[12px] font-medium tracking-wider'>
    {children}
  </span>
);

const TalkCard = ({ index, talk }) => {
  const { title, event, location, date, language, format, status, description, link } = talk;

  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 2) * 0.2, 0.75)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1500}
        scale={1}
        transitionSpeed={600}
        className='h-full'
      >
        <div className='h-full green-pink-gradient p-px rounded-[20px] shadow-card'>
          <div className='h-full bg-tertiary rounded-[20px] p-6 sm:p-7 flex flex-col'>
            <div className='flex items-start justify-between gap-3'>
              <p className='text-secondary text-[14px]'>
                {date} · {location}
              </p>
              {status === "upcoming" && (
                <span className='shrink-0 px-2.5 py-0.5 rounded-full bg-[#915eff] text-white text-[12px] font-semibold tracking-wider uppercase'>
                  Upcoming
                </span>
              )}
            </div>

            <h3 className='mt-3 text-white font-bold text-[20px] sm:text-[22px] leading-snug'>{title}</h3>
            <p className='mt-1 text-[#dfd9ff] text-[15px] font-medium'>{event}</p>

            <div className='mt-4 flex flex-wrap gap-2'>
              <Pill>{language}</Pill>
              <Pill>{format}</Pill>
            </div>

            <p className='mt-4 text-secondary text-[14px] leading-[24px]'>{description}</p>

            {link && (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-5 inline-flex w-fit items-center gap-1 text-[#915eff] hover:text-white text-[14px] font-medium transition-colors'
              >
                View session <span aria-hidden='true'>↗</span>
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Speaking = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sharing what I build</p>
        <h2 className={styles.sectionHeadText}>Speaking &amp; Community.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I share what I build. I give live-demo sessions on Copilot Studio, AI
        agents and Azure automation at Microsoft community events, in English
        and Spanish, and I've facilitated executive discussions on Responsible
        AI.
      </motion.p>

      <div className='mt-14 grid grid-cols-1 md:grid-cols-2 gap-7'>
        {talks.map((talk, index) => (
          <TalkCard key={`${talk.event}-${talk.date}`} index={index} talk={talk} />
        ))}
      </div>
    </>
  );
};

// The list is taller than the screen on mobile, so the section starts as soon as any part is visible and
// each card animates in on its own as it scrolls into view.
export default SectionWrapper(Speaking, "speaking", "some");
