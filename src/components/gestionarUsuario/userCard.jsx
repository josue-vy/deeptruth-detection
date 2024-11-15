import React from 'react';

function UserCard({ username, rating, comentario }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`w-6 h-6 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
    </svg>
  ));

  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-2">
        <span className="font-bold mr-2">{username}</span>
        <div className="flex">{stars}</div>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg">
        <p>{comentario}</p>
      </div>
    </div>
  );
}

export default UserCard;
