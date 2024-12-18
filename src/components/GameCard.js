import React, { useState } from "react";

const GameCard = ({ title, description, aboutContent, onPlay }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = (e) => {
    e.stopPropagation(); // Prevent click propagation to the parent
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white border-2 border-transparent rounded-lg p-6 shadow-md transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-blue-400 flex flex-col justify-between"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Play Button */}
      <button
        onClick={onPlay}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Start
      </button>

      {/* About Section */}
      {aboutContent && (
        <div className="bg-gray-100 rounded-lg shadow p-4 mt-6"
        onClick={(e) => e.stopPropagation()} // Avoid card click event
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">About the Game</h3>
          <p className="text-gray-700">
            Hazari, also known as the 360-game, is a popular card game where players aim to score 1000 points first.
            Each round consists of a collective total score of 360 distributed among all players.
          </p>

          {showMore && (
            <div className="mt-2">
              <p className="text-gray-700 mb-2">
                The game can be played by 4 players, and each round's scores are calculated based on specific card combinations.
              </p>
              <p className="text-gray-700">
                Hazari combines strategy, skill, and quick thinking to outscore opponents and reach the target first.
              </p>
            </div>
          )}
    
          {/* Toggle Read More */}
          <button
            onClick={toggleReadMore}
            className="text-blue-500 underline mt-2 focus:outline-none"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GameCard;
