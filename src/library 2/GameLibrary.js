import React, { useState, useEffect } from 'react';
import useWebSocket from "websocket";

const WS_URL = 'ws://127.0.0.1:8000';

function App() {
    useWebSocket(WS_URL, {
        onOpen: () => {
            console.log('WebSocket connection established.');
        }
    });

    return <GameLibrary />;
}

const GameLibrary = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        fetch("http://localhost:9090/library/GetAllGames")
            .then((response) => response.json())
            .then((data) => {
                setGames(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <h1>Game Library</h1>
            <div className="game-library">
                {games.map((game, index) => (
                    <div className="game-column" key={index}>
                        <h3>{game.name}</h3>
                        <p>Price: {game.price}</p>
                        <button>Start Game</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameLibrary;
