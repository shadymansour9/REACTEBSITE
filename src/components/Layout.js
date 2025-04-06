import React from "react";

function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 text-gray-800">
      {children}
    </div>
  );
}

export default Layout;
