import ExperienceCard from './ExperienceCard';
import { useState, useRef } from 'react';
import easyReplenishLogo from '../../assets/easyreplenish_logo.jpg'; 
import eatClubLogo from '../../assets/eatclub_logo.png'; 
import jharkhandGovtLogo from '../../assets/Jharkhand_Govt_logo.png'; 
import ExperienceDetails from './ExperienceDetails';
import { motion , AnimatePresence , useInView } from 'framer-motion';

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false }); //once is false to get the animation every time it comes in view
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const handleCardClick = (companyId) => {
    setSelectedCompanies(prev => {
      if (prev.includes(companyId)) {
        // If already selected, remove it
        return prev.filter(id => id !== companyId);
      } else {
        // If not selected, add it
        return [...prev, companyId];
      }
    });
  };
  const companies = [
    {
      id: 1,
      name: "Easy Replenish",
      logo: easyReplenishLogo,
      details: [
        "Designation: Software Engineer (Big Data)",
        [
          "Working on the Inventory Management Web tool which will serve as a product to the fashion apparel clients." ,
          "Reduced the GCP cost from 10 lac/month to 1 lac/month i.e by 90%. Also Reduced the time of exceution of queries by 60%",
          "Responsible for developing new backend features in the web tool using GCP(Google BigQuery) ,PL/SQL, SQL, data preprocessing using Python and testing using PowerBI and Excel.",
          "Responsible for ETL task automation, Data Warehousing, creating analytical sales trends along with their memory and time optimization.",
          "Using demand forecasting algorithm for replenishments of the stocks."
        ]
      ]
    },
    {
      id: 2, 
      name: "Eatclub (formerly Box8)",
      logo: eatClubLogo,
      details: [
        "Designation: Software Development Engineer",
         [
          "Worked on the Attendance System – Implemented more than 10 features and have created a large number of deep analytical reports using Python, Firebase as database, Elastic Search, PostgreSQL and Big Query for data extraction, OpenCV and face recognition libraries for image manipulation and employee encodings, Apache Airflow for pipelines and Google sheets for the analytical reports." ,
          "Worked on a large number of Image Processing Models with all the stages of implementation and analysis with more than 80% accuracy using yolov8, Python, PostgreSQL, Concept of OOPs for the running model script, Label Studio for labelling of the data and google sheets for preparing the KPIs of the model, Docker and Airflow for MLOps and OpenCV for Image handling. Used streamlit library for web display"
        ]
      ]
    },
    {
      id: 3, 
      name: "HIMMAT - Under District Magistrate Dhanbad",
      logo: jharkhandGovtLogo,
      details: [
        "Designation: Frontend Development Intern",
         [
          "Worked on the UI and Frontend Implementation part of the app which was a home isolation app meant for monitoring the status of covid positive patients and providing them the facilities of telemedicine and online consultation under Deputy Commissioner using Adobe XD for UI designing, Android Studio as the development platform, Java and XML for Android Development with Firebase as database." 
        ]
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-16 px-4 bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-12 text-center">
        <h2 className="text-4xl text-black dark:text-white font-bold mb-12">Experience</h2>

        {/* Here we'll render ExperienceCard components */}
        <motion.div 
        ref={sectionRef}
        initial={{ opacity: 0.5, height: "auto", y: 10 }}
        animate={isInView ? { opacity: 1, height: "auto", y: 0 }:{}}
        transition={{ duration: 1, ease: "easeInOut"}}
        className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <ExperienceCard
              key={company.id} // Always add a unique key for each card
              companyName={company.name}
              logoSrc={company.logo}
              onClick={() => handleCardClick(company.id)}
              // isSelected = {selectedCompanies.find(company.id)}
              isSelected={selectedCompanies.includes(company.id)}
            />
          ))}
        </motion.div>
       
          <div className="my-6 h-full">
          <AnimatePresence>
            {selectedCompanies.map((id) => {
              const company = companies.find((c) => c.id === id);
              return company ? ( // Added null check
                /*
                Key Prop Placement:
Moved the key prop to the motion.div wrapper (required for AnimatePresence to track elements)
                */
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, height: 0, x: -100 }}
                  animate={{ opacity: 1, height: "auto", x: 0 }}
                  exit={{ opacity: 0, height: 0, x: 100 }}
                  transition={{ duration: 1.5, ease: "easeInOut"}}
                >
                  <ExperienceDetails
                   
                    companyName={company.name}
                    details={company.details}
                  />
                </motion.div>
              ) : null;
            })}
            </AnimatePresence>
          </div>
        
      </div>
    </section>
  );
};

export default ExperienceSection;