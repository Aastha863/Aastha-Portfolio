
const ExperienceCard = ({ companyName , logoSrc , onClick , isSelected}) => {
  

  return (
    <div onClick={onClick} className={`bg-gray-200 dark:bg-gray-600 rounded-2xl shadow-lg m-8 p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer ${isSelected ? 'scale-105 ring-2 ring-cyan-400' : ''}`}>
      <img src={logoSrc} alt={`${companyName} logo`} className="w-24 h-24 mb-6 text-black rounded-full" />
      <h3 className="text-2xl text-black font-semibold dark:text-white">{companyName}</h3> 
    </div>
  );
};

export default ExperienceCard;

