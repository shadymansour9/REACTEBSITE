import React from "react";
import Layout from "../components/Layout";

function CompetitionPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Zakriyat Al-Nasra</h1>
      <p><strong>2nd place</strong> - International Architectural Competition Inspireli Award 2021.</p>
      <p><strong>Zakriyat Al-Nasra</strong> | A community cultural center that preserves the memory of generations in the city of Nazareth.</p>
      <p>
        The name means "Cultural memory" from the Arabic language and inspired by Christian Arab culture.
        Through traditional arabian food and valuables and a historical story.
      </p>
      <p>
        Located in the "Fawzi Ezer House" located in the ancient market of Nazareth
        which used to be an important point in history due to trade and economic prosperity.
      </p>
      <p>
        The aim of the project is to revive the market by connecting the preservation of tradition and culture
        with the younger generation, through the preservation of the Ottoman Design of the place along with modern design.
      </p>
      <p>
        Zakriyat Al-Nasra offers entertainment and historical recognition functions
        such as theaters, galleries and cafe in the spirit of culture.
      </p>

      <hr className="my-8" />

      <p><strong>"זקריאת אל נאסרה"</strong> מרכז קהילתי תרבותי המשמר זיכרון של דורות בעיר נצרת.</p>
      <p>
        פירוש השם "זיכרון תרבותי" מהשפה הערבית ובהשראת התרבות הערבית נוצרית,
        דרך אוכל מסורתי ערבי וחפצים בעלי ערך וסיפור היסטורי.
      </p>
      <p>
        ממוקם ב"בית פאוזי עאזר" שנמצא בשוק העתיק של נצרת שהיה בעבר נקודה חשובה
        בהיסטוריה בשל המסחר והשגשוג הכלכלי.
      </p>
      <p>
        מטרת הפרויקט היא להחיות את השוק על ידי חיבור בין שימור המסורת והתרבות עם הדור הצעיר,
        דרך שימור העיצוב העות'מאני של המקום יחד עם עיצוב מודרני.
      </p>
      <p>
        "זקריית אל נאסרה" מציע פונקציות בילוי והכרה היסטורית כגון: תיאטראות, גלריה, ובתי קפה ברוח התרבות.
      </p>

      <div className="flex flex-col gap-5 mt-8">
        <img src="/images/zak1.jpg" alt="project view 1" className="rounded shadow" />
        <img src="/images/zak2.jpg" alt="project view 2" className="rounded shadow" />
        <img src="/images/zak3.jpg" alt="project view 3" className="rounded shadow" />
        <img src="/images/zak4.jpg" alt="project view 4" className="rounded shadow" />
      </div>
    </Layout>
  );
}

export default CompetitionPage;
