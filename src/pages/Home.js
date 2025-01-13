
import React from "react";
import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  // About content for Hazari game
  const hazariAboutContent = `
  Hazari, a strategic and exciting card game, is widely played in countries like Bangladesh and Bhutan. The game’s roots are similar to the British card games 13-Card Brag and Crash but come with unique rules and a point-based scoring system. Players divide their 13-card hands into four sets—three sets of three cards each, and one final set of four cards. These sets are ranked and compared based on predefined card combinations. The ultimate goal of Hazari is to reach or exceed 1000 points to win the game.
  `;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Score Keeper</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        <GameCard
          title="Game Hazari (360)"
          description="Keep scores for the classic Hazari card game."
          onPlay={() => navigate("/360")}
          aboutContent={hazariAboutContent}
        />
        <GameCard
          title="Coming Soon"
          description="Stay tuned for more card games!"
          onPlay={() => alert("This feature is under development!")}
        />
      </div>

      
    </div>
  );
};

export default Home;
