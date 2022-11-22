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
    <div className='p-10 m-5 border rounded-2xl flex flex-col items-center'>
      <span className="text-6xl mb-4">{feature.icon}</span>
      <span className="text-xl font-plexsans mb-2">{feature.name}</span>
      <p>{feature.description}</p>
    </div>
  );
}

export default Feature;