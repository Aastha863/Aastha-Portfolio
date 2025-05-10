import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "./SkillsData";
import { motion , useInView} from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false }); //once is false to get the animation every time it comes in view
  return (
    <section id="skills" className="py-16 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <h2 className="text-3xl text-center text-black  dark:text-white mb-8 font-bold">Skills</h2>

         {/* First Row */}
      
        <motion.div  
         ref={sectionRef}
         initial={{ opacity: 0.5, height: "auto", y: 10 }}
         animate={isInView ? { opacity: 1, height: "auto", y: 0 }:{}}
         transition={{ duration: 1, ease: "easeInOut"}}
        className="mb-4 gap-4 flex flex-wrap justify-center"
           >
          {skills.map((skill, i) => (
            <SkillCard
              key={i}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
          
        </motion.div>
    </section>
  );
};

export default SkillsSection;
