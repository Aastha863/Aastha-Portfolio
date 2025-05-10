import React from 'react'
import { achievements } from './AchievementsData'
import AchievementsCard from './AchievementsCard';

const AchievementsSection = () => {
  
  return (
    <section id="achievements" className="py-12 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <h2 className="text-3xl text-center font-bold mb-6">Achievements</h2>
      <div className="mx-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-6 px-6 py-4 w-max">
          {achievements.map((item, index) => (
            <AchievementsCard key={index} item={item} />
          ))}
        </div>
        </div>
        <p className="text-sm text-center text-gray-500 mt-2 sm:hidden">
          ← Swipe to see more →
        </p>
    </section>
  );
}

export default AchievementsSection
