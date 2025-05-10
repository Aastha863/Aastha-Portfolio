import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useState ,useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import HeroParticles from './components/HeroParticles';

const Hero = () => {
  const [done, setDone] = useState(false);
  const fullName = 'Aastha Sinha';
  const typingDuration = (fullName.length * 70) + 1000;
  const space = " ";
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, typingDuration);

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);
  return (
    
    <section className="relative h-screen flex flex-col justify-center items-center bg-white text-black overflow-hidden dark:bg-black dark:text-white transition-colors duratin-300">
      {/* <Parallax speed={-20}> */}
      <HeroParticles/>
      <motion.h1
        // initial={{ opacity: 0, y: -50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 2 }}
        className="text-5xl font-bold mb-4 text-center"
      >
        Hi, I'm {' '}
        <span className="text-5xl font-bold mb-4">
        <Typewriter
            words={[fullName]}
            loop={1}
            cursor
            // cursorColor={done ? 'transparent' : 'black'}
            cursorStyle={done ? '' : ''}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        
      </motion.h1>
      {/* </Parallax> */}

      <motion.p
         initial={{ opacity: 0, y: 20 }}
         animate={ {opacity: 1, y: 0 }}
         transition={{ duration: 1.5 ,delay:0.5 , ease: "easeInOut"}}
         
        className="text-2xl mb-8 text-center"
      >
        Software Developer | IITian | Maths Enthusiast | Competitive Programmer | Pet Lover
      </motion.p>
      <div className='overflow-hidden'>
         
      <motion.p className='text'></motion.p>
      {/* {floatingTexts.map((text, idx) => (
        <FloatingText key={idx} text={text} />
      ))} */}
      </div>
     
    </section>
    
  
  );
};

export default Hero;