// Updated
import React, { useState, useEffect } from "react";

const SavedGamesManager = ({ players, onLoadGame, gameOver }) => {
  const [savedGames, setSavedGames] = useState([]);
  const [showOlderGames, setShowOlderGames] = useState(false); // Toggle visibility of older games

  const loadSavedGames = () => {
    const games = JSON.parse(localStorage.getItem("hazariSavedGames")) || [];
    setSavedGames(games);
  };

  const saveGame = () => {
    const dateTime = new Date().toLocaleString();
    const gameData = {
      gameId: Date.now(),
      dateTime,
      players,
    };

    const existingGames = JSON.parse(localStorage.getItem("hazariSavedGames")) || [];
    const updatedGames = [gameData, ...existingGames]; // Add new game to the top
    localStorage.setItem("hazariSavedGames", JSON.stringify(updatedGames));
    setSavedGames(updatedGames);
    alert("Game saved successfully!");
  };

  const handleLoadGame = (gameId) => {
    const selectedGame = savedGames.find((game) => game.gameId === gameId);
    if (selectedGame) {
      onLoadGame(selectedGame.players);
    }
  };

  // Delete saved games when the game is over
  useEffect(() => {
    if (gameOver) {
      localStorage.removeItem("hazariSavedGames");
      setSavedGames([]);
    }
  }, [gameOver]);

  useEffect(() => {
    loadSavedGames();
  }, []);

  return (
    <div className="text-center mt-6 space-y-6">
      <button onClick={saveGame} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Score & Continue Later
      </button>

      {savedGames.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Saved Games:</h2>
          <ul className="space-y-2">
            <li className="p-2 border rounded flex justify-between items-center bg-yellow-100">
              <div>
                <strong>Date:</strong> {savedGames[0].dateTime}
                <br />
                <strong>Players:</strong> {savedGames[0].players.map((p) => p.name).join(", ")}
              </div>
              <button
                onClick={() => handleLoadGame(savedGames[0].gameId)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Load
              </button>
            </li>
          </ul>
          <button
            onClick={() => setShowOlderGames(!showOlderGames)}
            className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
          >
            {showOlderGames ? "Hide Older Games" : "Show Older Games"}
          </button>
          {showOlderGames && (
            <ul className="space-y-2 mt-4">
              {savedGames.slice(1).map((game) => (
                <li key={game.gameId} className="p-2 border rounded flex justify-between items-center">
                  <div>
                    <strong>Date:</strong> {game.dateTime}
                    <br />
                    <strong>Players:</strong> {game.players.map((p) => p.name).join(", ")}
                  </div>
                  <button
                    onClick={() => handleLoadGame(game.gameId)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Load
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedGamesManager;




// import React, { useState, useEffect } from "react";

// const SavedGamesManager = ({ players, onLoadGame }) => {
//   const [savedGames, setSavedGames] = useState([]);

//   // Fetch saved games from localStorage
//   const loadSavedGames = () => {
//     const games = JSON.parse(localStorage.getItem("hazariSavedGames")) || [];
//     setSavedGames(games);
//   };

//   // Save current game
//   const saveGame = () => {
//     const dateTime = new Date().toLocaleString(); 
//     const gameData = {
//       gameId: Date.now(), // Unique identifier (timestamp)
//       dateTime,
//       players,
//     };

//     const existingGames = JSON.parse(localStorage.getItem("hazariSavedGames")) || [];
//     const updatedGames = [...existingGames, gameData];
//     localStorage.setItem("hazariSavedGames", JSON.stringify(updatedGames)); // Save updated list
//     setSavedGames(updatedGames);
//     alert("Game saved successfully!");
//   };

//   // Load a specific game
//   const handleLoadGame = (gameId) => {
//     const selectedGame = savedGames.find((game) => game.gameId === gameId);
//     if (selectedGame) {
//       onLoadGame(selectedGame.players); // Pass players data to parent
//       const updatedGames = savedGames.filter((game) => game.gameId !== gameId); // Remove loaded game
//       localStorage.setItem("hazariSavedGames", JSON.stringify(updatedGames));
//       setSavedGames(updatedGames);
//       alert(`Game from ${selectedGame.dateTime} loaded successfully!`);
//     } else {
//       alert("Game not found!");
//     }
//   };

//   // Load saved games on component mount
//   useEffect(() => {
//     loadSavedGames();
//   }, []);

//   return (
//     <div className="text-center mt-6 space-y-6">
//       <button onClick={saveGame} className="bg-blue-500 text-white px-4 py-2 rounded">
//         Save Score & Continue Later
//       </button>

//       {savedGames.length > 0 && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold mb-4">Saved Games:</h2>
//           <ul className="space-y-2">
//             {savedGames.map((game) => (
//               <li key={game.gameId} className="p-2 border rounded flex justify-between items-center">
//                 <div>
//                   <strong>Date:</strong> {game.dateTime}
//                   <br />
//                   <strong>Players:</strong> {game.players.map((p) => p.name).join(", ")}
//                 </div>
//                 <button
//                   onClick={() => handleLoadGame(game.gameId)}
//                   className="bg-green-500 text-white px-4 py-2 rounded"
//                 >
//                   Load
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedGamesManager;


