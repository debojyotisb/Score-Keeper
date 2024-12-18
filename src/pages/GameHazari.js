import React, { useState, useEffect } from "react";
import SavedGamesManager from "../components/SavedGamesManager";

const GameHazari = () => {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0, history: [] },
    { name: "Player 2", score: 0, history: [] },
    { name: "Player 3", score: 0, history: [] },
    { name: "Player 4", score: 0, history: [] },
  ]);
  const [currentScores, setCurrentScores] = useState(players.map(() => ""));
  const [gameOver, setGameOver] = useState(false);
  const [isNavigatingAway, setIsNavigatingAway] = useState(false);

  const handleInputChange = (index, value) => {
    const updatedScores = [...currentScores];
    updatedScores[index] = value;
    setCurrentScores(updatedScores);
  };

  const handleSubmit = (index) => {
    const value = parseInt(currentScores[index]);
    if (isNaN(value)) return;

    const updatedPlayers = [...players];
    updatedPlayers[index].history.push(value);
    updatedPlayers[index].score += value;
    setPlayers(updatedPlayers);

    const updatedScores = [...currentScores];
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Handles changes to the current scores input fields. Updates the state
   * and marks the changes as unsaved.
   * @param {number} index The index of the player whose score is being updated.
   * @param {string} value The new value of the score input field.
   */
/******  5248f2ca-c465-450d-9d2c-d9c9b56bbd3d  *******/    updatedScores[index] = "";
    setCurrentScores(updatedScores);

    if (updatedPlayers[index].score >= 1000) {
      setGameOver(true);
      alert(`${updatedPlayers[index].name} has won the game with ${updatedPlayers[index].score} points!`);
    }
  };

  const updateName = (index) => {
    const newName = prompt(`Enter new name for ${players[index].name}:`, players[index].name);
    if (newName) {
      const updatedPlayers = [...players];
      updatedPlayers[index].name = newName;
      setPlayers(updatedPlayers);
    }
  };

  const loadGameFromSaved = (loadedPlayers) => {
    setPlayers(loadedPlayers);
    setCurrentScores(loadedPlayers.map(() => ""));
    setGameOver(false);
  };

  // Detect Back/Forward Navigation (popstate)
  useEffect(() => {
    const handlePopState = (e) => {
      if (isNavigatingAway) return;

      const confirmNavigation = window.confirm(
        "Warning: You are about to leave the current game. Unsaved data will be lost. Save the game before navigating?"
      );
      if (!confirmNavigation) {
        // Push the current state back onto the stack to cancel navigation
        window.history.pushState(null, "", window.location.href);
      } else {
        setIsNavigatingAway(true);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isNavigatingAway]);

  // Warn on Page Refresh or Navigation (beforeunload)
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Some browsers require this for the warning dialog to appear
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Hazari or 360 Game Score Board
      </h1>

      <div className="space-y-4">
        {players.map((player, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <span
                className="text-lg font-medium cursor-pointer underline"
                onClick={() => updateName(index)}
              >
                {player.name}
              </span>
              <span className="text-lg font-bold text-green-600">
                Subtotal: {player.score}
              </span>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Score"
                  className="border px-1 py-0.5 rounded w-20"
                  value={currentScores[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                <button
                  onClick={() => handleSubmit(index)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-500">
                View Score History
              </summary>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                {player.history.length > 0 ? (
                  player.history.map((round, roundIndex) => (
                    <li key={roundIndex}>
                      Round {roundIndex + 1}: {round} points
                    </li>
                  ))
                ) : (
                  <li>No history available</li>
                )}
              </ul>
            </details>
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="text-center mt-6 text-2xl text-red-600 font-bold">
          Game Over! 🎉
        </div>
      )}

      <SavedGamesManager players={players} onLoadGame={loadGameFromSaved} />
    </div>
  );
};

export default GameHazari;
