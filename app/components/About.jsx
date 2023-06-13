'use client';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import Image from 'next/image';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0, 1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello! My name is Cindy and I enjoy creating things that live on the
        Internet. With a background in accounting and admin management, I bring
        a unique perspective to my development work.
        <br />
        <br />
        In the past few months, I have built a few team and individual full
        stack projects, which showcasing my ability to adapt and learn new
        skills and technologies.
        <br />
        <br />
        Apart from technical skills, I also bring with me a lot of transferable
        soft skills from my previous role, such as project management,
        communication with clients and team members, and engineering decision
        making, which proved to be very useful in working environment involving
        multiple stakeholders.
        <br />
        <br />
        Throughout my career, I have honed my problem-solving abilities, as well
        as my communication and stakeholder management skills. These
        transferable skills have proven to be invaluable in my previous roles
        and have enabled me to effectively collaborate with clients and team
        members. Additionally, my strong attention to detail ensures that the
        projects I work on are not only functional but also aesthetically
        pleasing and user-friendly. I am driven by a desire to contribute to the
        growth of innovative companies by building scalable and efficient web
        applications. I thrive in fast-paced environments that embrace change
        and value continuous learning. With a demonstrated ability to adapt
        quickly and learn new technologies, I am confident in my ability to take
        on new challenges and deliver high-quality results.
      </motion.p>

      {/* cards */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
