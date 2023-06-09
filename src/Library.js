import React, { useState } from 'react';

const GameLibrary = () => {
    const [games, setGames] = useState([
        { id: 1, title: 'Game 1', genre: 'Action' },
        { id: 2, title: 'Game 2', genre: 'Adventure' },
        { id: 3, title: 'Game 3', genre: 'Strategy' },
    ]);

    const [newGame, setNewGame] = useState({ title: '', genre: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewGame((prevGame) => ({ ...prevGame, [name]: value }));
    };

    const handleAddGame = () => {
        setGames((prevGames) => [...prevGames, { ...newGame, id: Date.now() }]);
        setNewGame({ title: '', genre: '' });
    };

    const handleDeleteGame = (id) => {
        setGames((prevGames) => prevGames.filter((game) => game.id !== id));
    };

    return (
        <div>
            <h1>Game Library</h1>
            <div>
                <h2>Add Game</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newGame.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={newGame.genre}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddGame}>Add</button>
            </div>
            <div>
                <h2>Games</h2>
                <ul>
                    {games.map((game) => (
                        <li key={game.id}>
                            {game.title} - {game.genre}
                            <button onClick={() => handleDeleteGame(game.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GameLibrary;