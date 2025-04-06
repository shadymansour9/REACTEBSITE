import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 flex-row-reverse">
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpg`}
          alt="RM Logo"
          className="w-12 h-12 object-contain"
        />

        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            ☰
          </button>
        )}

        {!isMobile && (
          <ul className="flex gap-6 text-sm text-gray-800 font-medium flex-row-reverse">
            <li><Link to="/">בית</Link></li>
            <li><Link to="/register">הרשמה</Link></li>
            <li><Link to="/about">אודות</Link></li>
            <li><Link to="/competition">תחרויות</Link></li>
            <li><Link to="/projects">פרויקטים</Link></li>
          </ul>
        )}
      </div>

      {/* תפריט למובייל - מעוצב בשורה אופקית */}
      {isMobile && isOpen && (
        <div className="px-4 pb-4 text-center">
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-800 font-medium flex-row-reverse">
            <li><Link to="/" onClick={() => setIsOpen(false)}>בית</Link></li>
            <li><Link to="/register" onClick={() => setIsOpen(false)}>הרשמה</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>אודות</Link></li>
            <li><Link to="/competition" onClick={() => setIsOpen(false)}>תחרויות</Link></li>
            <li><Link to="/projects" onClick={() => setIsOpen(false)}>פרויקטים</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
