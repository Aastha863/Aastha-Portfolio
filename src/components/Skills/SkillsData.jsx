// skillsData.js
import { FaDocker , FaPython, FaLinux,FaHtml5 , FaCss3Alt} from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";
import { SiOpencv , SiElastic , SiSqlite , SiGooglecloud} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql , BiLogoFirebase } from "react-icons/bi";
import { BsFiletypeXml } from "react-icons/bs";
import { PiFileC } from "react-icons/pi";

export const skills = [
  { name: "C++", icon: <PiFileCpp size={30} /> },
  { name: "JavaScript", icon: <IoLogoJavascript size={30} /> },
  { name: "Python", icon: <FaPython size={30} /> },
  { name: "HTML", icon: <FaHtml5 size={30} /> },
  { name: "CSS", icon: <FaCss3Alt size={30} /> },
  { name: "Docker" , icon: <FaDocker size={30}/> },
  { name: "PostGreSql" , icon: <BiLogoPostgresql size={30}/> },
  { name: "OpenCV" , icon: <SiOpencv size={30}/> },
  { name: "Firebase" , icon: <BiLogoFirebase size={30}/> },
  { name: "XML" , icon: <BsFiletypeXml size={30}/> },
  { name: "SQLite" , icon: <SiSqlite size={30}/> },
  { name: "GCP" , icon: <SiGooglecloud size={30}/> },
  { name: "Linux" , icon: <FaLinux size={30}/> },
  { name: "C" , icon: <PiFileC size={30}/> },

  
  // Text only skills (no icon)
  { name: "Algorithms" },
  { name: "Data Structures" },
  { name: "SQL" },
  { name: "Power BI" },
  { name: "Data Analysis" },
  { name: "Web Scraping" },
  { name: "UI/UX design" },
  { name: "Bash Scripting" },
  { name: "Adobe XD Prototyping" },
  { name: "ML using Yolov8" },
  { name: "Apache Airflow"},
  { name: "ETL" },
  { name: "Android Development using Java" },
];
