import React from 'react'

interface Props {
  feature: {
    icon: any;
    name: string;
    description: string;
  }
}

const Feature = ({feature}: any) => {
  return (
      <div className='m-6 md:m-1 p-6 border border-blue-200 dark:border-white bg-blue-50 text-black rounded-2xl flex flex-col items-center min-h-[300px] hover:scale-105 duration-500'>
        <span className="text-6xl mb-4">{feature.icon}</span>
        <span className="text-xl font-plexsans mb-2">{feature.name}</span>
        <p className="m-auto">{feature.description}</p>
        <a href="/quote" className="rounded-lg bg-blue-400 m-3 px-4 py-1">השוואת ביטוח בחינם</a>
      </div>
  );
}

export default Feature;