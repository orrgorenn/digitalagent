import React from 'react'
import { AiOutlineFundProjectionScreen, AiFillAccountBook } from 'react-icons/ai';
import { RiHealthBookFill } from 'react-icons/ri';
import { GiHealthCapsule, GiTakeMyMoney } from 'react-icons/gi'
import { FaWheelchair } from 'react-icons/fa';
import Feature from './Feature';

const Features = () => {
  const features = [
    {
      "icon": <GiHealthCapsule />,
      "name": "ביטוחי בריאות",
      "description": "ביטוח המעניק כיסוי בסיסי בהתאם לצרכים הייחודיים שלכם, ועשוי לחסוך לכם עשרות ואף מאות אלפי שקלים. בין הכיסויים תוכלו למצוא תרופות, השתלות, ניתוחים, שירותים אמבולטוריים, שיקום, ושירותים רפואיים נוספים.",
    },
    {
      "icon": <RiHealthBookFill />,
      "name": "ביטוחי חיים",
      "description": "ביטוח המעניק כיסוי בסיסי בהתאם לצרכים הייחודיים שלכם, ועשוי לחסוך לכם עשרות ואף מאות אלפי שקלים. בין הכיסויים תוכלו למצוא תרופות, השתלות, ניתוחים, שירותים אמבולטוריים, שיקום, ושירותים רפואיים נוספים.",
    },
    {
      "icon": <AiOutlineFundProjectionScreen />,
      "name": "קופות פנסיה",
      "description": "ביטוח המעניק כיסוי בסיסי בהתאם לצרכים הייחודיים שלכם, ועשוי לחסוך לכם עשרות ואף מאות אלפי שקלים. בין הכיסויים תוכלו למצוא תרופות, השתלות, ניתוחים, שירותים אמבולטוריים, שיקום, ושירותים רפואיים נוספים.",
    },
    {
      "icon": <AiFillAccountBook />,
      "name": "קרנות השתלמות",
      "description": "ביטוח המעניק כיסוי בסיסי בהתאם לצרכים הייחודיים שלכם, ועשוי לחסוך לכם עשרות ואף מאות אלפי שקלים. בין הכיסויים תוכלו למצוא תרופות, השתלות, ניתוחים, שירותים אמבולטוריים, שיקום, ושירותים רפואיים נוספים.",
    },
    {
      "icon": <GiTakeMyMoney />,
      "name": "קופות גמל להשקעה",
      "description": "ביטוח המעניק כיסוי בסיסי בהתאם לצרכים הייחודיים שלכם, ועשוי לחסוך לכם עשרות ואף מאות אלפי שקלים. בין הכיסויים תוכלו למצוא תרופות, השתלות, ניתוחים, שירותים אמבולטוריים, שיקום, ושירותים רפואיים נוספים.",
    },
    {
      "icon": <FaWheelchair />,
      "name": "ביטוחים סיעודיים",
      "description": "ביטוח המעניק כיסוי בסיסי בהתאם לצרכים הייחודיים שלכם, ועשוי לחסוך לכם עשרות ואף מאות אלפי שקלים. בין הכיסויים תוכלו למצוא תרופות, השתלות, ניתוחים, שירותים אמבולטוריים, שיקום, ושירותים רפואיים נוספים.",
    },
  ];

  return (
    <section className="w-full mx-auto text-center p-2 py-10 bg-indigo-900">
      <h2 className="font-bold text-3xl mb-8">אפשר להגיד שאנחנו מומחים בסוגי הביטחוחים הבאים</h2>

      <div className="text-center mb-10">
        <span className="inline-block w-1 h-1 rounded-full bg-gray-900 mr-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-gray-900 mr-1"></span>
        <span className="inline-block w-40 h-1 rounded-full bg-gray-900 mr-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-gray-900 mr-1"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-gray-900 mr-1"></span>
      </div>

      <div className="text-center mb-10 grid grid-cols-3">
        {features.map((feat) => (
          <Feature feature={feat} />
        ))}
      </div>
    </section>
  );
}

export default Features;