import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold tracking-tight text-center">RM Revit Courses - 2025</h1>

      <p className="leading-relaxed text-lg">
        אם אתה מחפש הזדמנות לפתח את הכישורים שלך בעיצוב פנים והנדסת עיצוב – זו ההזדמנות שלך!
        הקורסים שלנו מעוצבים במיוחד לקחת אותך מאפס לרמה מקצועית, עם ליווי אישי לאורך כל הדרך.
      </p>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold underline decoration-blue-400">למה לבחור בקורסים שלנו?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>✔ למידה מעשית וישירה – Revit או Render בצורה פשוטה לכל רמה.</li>
          <li>✔ פרויקטים אמיתיים – עבודה על תרגולים מהשטח.</li>
          <li>✔ תיק עבודות מקצועי – מוכן להצגה ללקוחות.</li>
          <li>✔ הזדמנויות תעסוקה – כישורים מבוקשים בשוק.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold underline decoration-blue-400">פרטי הקורסים:</h2>
        <p>📌 קורס RM Revit: 12 שיעורים בזום – שלב אחרי שלב.</p>
        <p>📌 קורס RM Render: 6 שיעורים – עיצוב פנים מדויק ומקצועי.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold underline decoration-blue-400">מה תקבלו בהרשמה?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>⭐ ליווי אישי גם לאחר סיום הקורס.</li>
          <li>⭐ לימוד טכניקות מתקדמות מותאמות לשוק.</li>
          <li>⭐ תיק עבודות מוכן להצגה.</li>
        </ul>
      </div>

      <div className="pt-8 text-center">
        <p className="font-bold text-lg">המקומות מוגבלים! הירשם עכשיו:</p>
        <Link to="/register">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 mt-3 transition duration-300">
            לטופס הרשמה
          </button>
        </Link>
      </div>

      <hr className="my-12 border-gray-300" />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">על הסטודיו</h2>
        <p className="leading-relaxed">
          RM Design הוא סטודיו לעיצוב בחיפה המתמחה בעיקר בעיצוב משרדים, מגורים ומסחר.
          אנו מאמינים שעיצוב חכם נוצר ממחקר, שיחה עם הלקוח ועבודת צוות.
          אנו עובדים עם טכנולוגיות מתקדמות כמו BIM ו-VR.
        </p>
        <p className="font-bold">הסטודיו הוקם על ידי ראשה מנסור, בוגרת הפקולטה לעיצוב ב-HIT.</p>
      </div>
    </Layout>
  );
}

export default HomePage;