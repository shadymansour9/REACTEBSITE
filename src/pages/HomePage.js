import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-200 space-y-16 bg-black shadow-inner rounded-xl">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-white">RM Revit Courses - 2025</h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          אם אתה מחפש הזדמנות לפתח את הכישורים שלך בעיצוב פנים והנדסת עיצוב – זו ההזדמנות שלך!
          הקורסים שלנו מעוצבים במיוחד לקחת אותך מאפס לרמה מקצועית, עם ליווי אישי לאורך כל הדרך.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-xl shadow-md p-6 space-y-4 border-t-4 border-blue-400">
          <h2 className="text-2xl font-semibold border-b pb-2 text-white">למה לבחור בקורסים שלנו?</h2>
          <ul className="list-disc list-inside space-y-2 text-base text-right">
            <li>✔ למידה מעשית וישירה – Revit או Render בצורה פשוטה לכל רמה.</li>
            <li>✔ פרויקטים אמיתיים – עבודה על תרגולים מהשטח.</li>
            <li>✔ תיק עבודות מקצועי – מוכן להצגה ללקוחות.</li>
            <li>✔ הזדמנויות תעסוקה – כישורים מבוקשים בשוק.</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-md p-6 space-y-4 border-t-4 border-green-400">
          <h2 className="text-2xl font-semibold border-b pb-2 text-white">פרטי הקורסים:</h2>
          <p>📌 קורס RM Revit: 12 שיעורים בזום – שלב אחרי שלב.</p>
          <p>📌 קורס RM Render: 6 שיעורים – עיצוב פנים מדויק ומקצועי.</p>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-md p-6 space-y-4 border-t-4 border-yellow-400">
          <h2 className="text-2xl font-semibold border-b pb-2 text-white">מה תקבלו בהרשמה?</h2>
          <ul className="list-disc list-inside space-y-2 text-base text-right">
            <li>⭐ ליווי אישי גם לאחר סיום הקורס.</li>
            <li>⭐ לימוד טכניקות מתקדמות מותאמות לשוק.</li>
            <li>⭐ תיק עבודות מוכן להצגה.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-800 via-gray-900 to-blue-900 rounded-xl shadow-md p-6 text-center flex flex-col justify-center items-center space-y-4">
          <p className="font-bold text-xl text-white">המקומות מוגבלים! הירשם עכשיו:</p>
          <Link to="/register">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              לטופס הרשמה
            </button>
          </Link>
        </div>
      </div>

      <hr className="my-12 border-gray-600" />

      <div className="bg-gray-900 rounded-xl shadow-md p-6 space-y-4 border-r-4 border-indigo-300">
        <h2 className="text-2xl font-semibold text-white">על הסטודיו</h2>
        <p className="leading-relaxed">
          RM Design הוא סטודיו לעיצוב בחיפה המתמחה בעיקר בעיצוב משרדים, מגורים ומסחר.
          אנו מאמינים שעיצוב חכם נוצר ממחקר, שיחה עם הלקוח ועבודת צוות.
          אנו עובדים עם טכנולוגיות מתקדמות כמו BIM ו-VR.
        </p>
        <p className="font-bold text-gray-300">הסטודיו הוקם על ידי ראשה מנסור, בוגרת הפקולטה לעיצוב ב-HIT.</p>
      </div>
    </div>
  );
}

export default HomePage;
