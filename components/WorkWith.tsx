import React from 'react'

import CompaniesSlider from './CompaniesSlider';

const WorkWith = () => {
  return (
    <section className="w-full mx-auto text-center p-2 py-10">
      <h2 className="font-bold text-3xl mb-8">חלק מהשותפים העסקיים שלנו</h2>

      <div className="text-center mb-10">
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 mr-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 mr-1"></span>
        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500 mr-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 mr-1"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 mr-1"></span>
      </div>

      <div className='mt-12 mb-8 max-w-5xl mx-auto'>
        <CompaniesSlider />
      </div>
    </section>
  )
}

export default WorkWith;