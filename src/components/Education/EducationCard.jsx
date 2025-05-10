import React from 'react'

const EducationCard = ({logo , name , details , score}) => {
  return (
    <div className="bg-green-50 dark:bg-emerald-600 rounded-2xl shadow-lg m-4 p-8 flex flex-col items-center justify-center transition-colors duration-300">
      < img src= {logo} alt={`${name} logo`} className="w-24 h-24 mb-6 text-black rounded-full" /> 
      <h3 className="text-2xl text-black dark:text-white font-semibold">{name}</h3> 
      <div className='text-sm text-black dark:text-white p-2'>
        <div className='font-medium'>{details}</div>
        <div className='italic mt-2'>{score}</div>
      </div>
      
    </div>
  )
}

export default EducationCard