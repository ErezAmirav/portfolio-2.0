import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      {active ? (
        <div className="h-[0.1rem] -mt-[0.2rem] bg-purple-500 mr-3 animate-slide-in" />
      ) : (
        ""
      )}
    </button>
  );
};

export default TabButton;
