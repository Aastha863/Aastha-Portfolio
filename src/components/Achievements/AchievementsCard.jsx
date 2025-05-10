import React from 'react'

const AchievementsCard = ({item}) => {
  return (
    <div className="min-w-[250px] max-w-[300px] bg-yellow-100 dark:bg-yellow-600 rounded-2xl shadow-lg p-4 flex flex-col justify-center text-center snap-center hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="text-4xl mb-2">🏆</div>
      <p className="text-sm">{item.text} </p>
      <p className='text-sm'>
        {item.link ? <a href={item.link}
       target="_blank"
       rel="noopener noreferrer"
       className='text-yellow-600 dark:text-yellow-400 underline appearance-none '
       >View Profile</a>: ''}
           </p>
    </div>
  );
}

export default AchievementsCard