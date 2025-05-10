import React from 'react'
import { educationArray } from './EducationData'
import EducationCard from './EducationCard';
import { motion , useInView} from 'framer-motion';
import { useRef } from 'react';

function EducationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false }); //once is false to get the animation every time it comes in view
    
  return (
    <section id = 'education' className='py-16 px-4 bg-white dark:bg-black transition-colors duration-300'>
         <div className=" text-center">
         <h2 className="text-4xl text-black dark:text-white font-bold mb-12">Education</h2>
         
         <motion.div 
           ref={sectionRef}
           initial={{ opacity: 0.5, height: "auto", y: 10 }}
           animate={isInView ? { opacity: 1, height: "auto", y: 0 }:{}}
           transition={{ duration: 1, ease: "easeInOut"}}
         className='m-2 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {
            educationArray.map((item , i) => (
              <EducationCard
              key={i}
              logo= {item.logo}
              name = {item.name}
              details = {item.details}
              score = {item.score}
              
            
              />
            ))
          }
         </motion.div>
         
         </div>
    </section>
  );
};

export default EducationSection;