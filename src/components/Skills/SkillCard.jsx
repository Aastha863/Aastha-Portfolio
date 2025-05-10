// SkillCard.jsx

import React from "react";


const SkillCard = ({ name, icon }) => {
  
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 m-2 bg-amber-50 dark:bg-amber-600 dark:text-white text-black rounded-xl flex flex-col justify-center items-center shadow-cyan-400 hover:shadow-lg hover:scale-110 transition-all duration-500 relative group">
      <div className="text-2xl sm:text-3xl md:text-4xl mb-1">
        {icon ? icon : <span className="text-sm flex flex-row text-center">{name}</span>}
      </div>

      {/* Text appears only on hover */}
      <div className="absolute bottom-1 text-[10px] sm:text-xs md:text-sm px-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {icon?name:''}
      </div>
    </div>
  );
};

export default SkillCard;
