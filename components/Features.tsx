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
      "description": "ביטוח הבריאות מאפשר לצרכן לקבל שירותים רפואיים או לקבל פיצוי בהתאם לתנאים המוגדרים בפוליסת הביטוח. בין הכיסויים תוכלו למצוא תרופות, השתלות, ניתוחים, שירותים אמבולטוריים, ועוד.",
      "slug": "health-insurance"
    },
    {
      "icon": <RiHealthBookFill />,
      "name": "ביטוחי חיים",
      "description": "ביטוח חיים הוא חוזה עם חברת הביטוח שמבטיח שבמקרה של מוות, חלילה, או במקרה של אובדן כושר עבודה ונכות, המבוטח או מי שבחר והגדיר להיות המוטבים יקבלו סכום כסף חד פעמי או קצבה חודשית.",
      "slug": "life-insurance"
    },
    {
      "icon": <AiOutlineFundProjectionScreen />,
      "name": "קופות פנסיה",
      "description": "תשלום חודשי המשולם לעמית לאחר פרישתו מהעבודה, באירוע נכות לפני הפרישה מהעבודה או תשלום לשארים בעקבות אירוע פטירה של העמית/ה הן במהלך העבודה או לאחר הפרישה מעבודה.",
      "slug": "pension"
    },
    {
      "icon": <AiFillAccountBook />,
      "name": "קרנות השתלמות",
      "description": "קופת חיסכון לעובדים שמשמשת כיום כאפיק חיסכון כללי שלא לטווח ארוך עובדים שימשכו את הכספים שהצטברו בקרן לאחר 6 שנים יהיו פטורים מתשלום מס הכנסה על הכספים והרווחים שצברו.",
    },
    {
      "icon": <GiTakeMyMoney />,
      "name": "קופות גמל להשקעה",
      "description": "חיסכון המאפשר לציבור הרחב לחסוך באופן עצמאי למשך כל תקופה שירצו, הכספים נזילים בכל עת וניתן למשוך אותם ללא קנס או מס מלבד מס על הרווחים שהצטברו מעבר לסכום המקורי שהופקד.",
      "slug": "provident-fund"
    },
    {
      "icon": <FaWheelchair />,
      "name": "ביטוחים סיעודיים",
      "description": "ביטוח סיעודי הוא חוזה עם חברת הביטוח שמבטיח שבמקרה שהמבוטח יגיע למצב סיעודי, המבוטח יקבל קצבה חודשית.  סיעודי מיועד למבוגרים ולצעירים כאחד.",
      "slug": "ltc"
    },
  ];

  return (
    <section className="bg-blue-100 dark:bg-indigo-900">
      <div className="w-full text-center p-2 py-10 max-w-5xl mx-auto">
        <h2 className="font-bold text-3xl mb-8 dark:text-white">אנו מתמחים בכל סוגי הביטוחים</h2>

        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 dark:bg-white mr-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 dark:bg-white mr-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500 dark:bg-white mr-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 dark:bg-white mr-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 dark:bg-white mr-1"></span>
        </div>

        <div className="text-center mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feat, index) => (
            <Feature feature={feat} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;