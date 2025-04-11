import React from 'react'

const DashboardActionCard = ({ icon, title, quantity, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="relative flex-1 bg-teal-600 text-white rounded-lg shadow-md p-4 w-40 h-52 flex flex-col items-center justify-center hover:bg-teal-700 cursor-pointer transition-all"
        >
            <div className="mb-3">{icon}</div>
            <h3 className="font-bold text-center text-2xl">{title}</h3>
            <p className="absolute bottom-2 left-5 text-xs opacity-80">{quantity}</p>
        </div>
    );
};

export default DashboardActionCard