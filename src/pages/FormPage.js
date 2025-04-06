import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../App.css";

function FormPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9mrmmoh",
        "template_geaa5dw",
        form.current,
        "0-GZndZldpzAWnM2X"
      )
      .then((result) => {
        alert("הטופס נשלח בהצלחה ✅");

        emailjs.sendForm(
          "service_9mrmmoh",
          "template_140wet8",
          form.current,
          "0-GZndZldpzAWnM2X"
        );

        form.current.reset();
      })
      .catch((error) => {
        alert("❌ אירעה שגיאה בשליחה");
        console.error("שגיאה:", error);
      });
  };

  return (
    <div className="App px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">טופס הרשמה לקורסי Revit</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 shadow-md rounded"
      >
        <input
          className="border p-2 rounded"
          type="text"
          name="name"
          placeholder="שם מלא"
          required
        />
        <input
          className="border p-2 rounded"
          type="email"
          name="email"
          placeholder="אימייל"
          required
        />
        <input
          className="border p-2 rounded"
          type="text"
          name="title"
          placeholder="נושא הפנייה"
          required
        />
        <textarea
          className="border p-2 rounded"
          name="message"
          placeholder="הודעה"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          שלח טופס
        </button>
      </form>
    </div>
  );
}

export default FormPage;
