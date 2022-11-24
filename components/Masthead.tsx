import React from 'react'

const Masthead = () => {
  return (
    <section className="relative mb-6 h-96 flex justify-center items-center">
      <div className="absolute w-full h-full overflow-hidden">
        <video className="absolute h-auto left-1/2 top-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-20" autoPlay muted loop playsInline><source src="/masthead-insurance.mp4" type="video/mp4" /></video>
      </div>
      <div className="z-10 text-center px-8 drop-shadow-lg shadow-black">
        <div className="uppercase text-lg mb-4">
          מעוניינים לבצע השוואת ביטוחים? משלמים מחיר יקר מדיי על המוצרים הביטוחיים שלכם?
        </div>
        <div className="text-4xl font-plexsans font-medium">
          תנו לסוכן הדיגיטלי לעשות את העבודה <span className="text-indigo-500">בשבילכם</span>
        </div>
      </div>
    </section>
  );
}

export default Masthead