
import React from 'react';



const ExperienceDetails = ({ companyName, details }) => {
  return (
    <div className="bg-[#1E1E1E] p-6 my-4 rounded-xl shadow-inner font-mono text-black">
      <div className="text-lg mb-2">
        <span className="text-cyan-400 font-bold">{companyName}</span>
      </div>

      <div className="pl-6 text-sm text-left leading-relaxed">
        {details.map((item, index) => (
          <div key={index} className="mb-2">
            {typeof item === "string" ? ( // If item is a string (like designation)
              <div className="font-semibold text-lg text-purple-400">
                {item}
              </div>
            ) : (
              // If item is an array (list of work points)
              <ul className="list-disc list-outside pl-4">
                {item.map((point, subIndex) => (
                  <li key={subIndex} className="text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="text-lg mt-2"></div>
    </div>
  );
};

export default ExperienceDetails;