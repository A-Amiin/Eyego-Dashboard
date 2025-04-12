import React from "react";

const DashboardActionCard = ({ icon, title, quantity, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative flex-1  text-[#444444] rounded-lg  shadow-xl p-4 w-40 h-32 flex flex-col justify-center bg-white hover:bg-gray-100 cursor-pointer transition-all"
    >
      <div className="mb-3 bg-gradient-to-b from-[#624BFF] to-[#1e1e1e] p-4 rounded-lg absolute -top-3 left-3">
        {icon}
      </div>
      <h3 className="font-bold text-left text-lg">{title}</h3>
      <p className="absolute text-[#637381] bottom-5 left-5 text-sm opacity-80">
        {quantity}
      </p>
    </div>
  );
};

export default DashboardActionCard;
