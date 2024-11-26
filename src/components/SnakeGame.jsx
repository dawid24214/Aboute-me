import React, {useState, useEffect} from "react";
import '../style/_Game.scss';

 export const SnakeGame = () => {
    const [snake, setSnake] = useState([[10, 10]]);
    const [food, setFood] = useState([15, 15]);
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);

    // Zmieniaj kierunek na podstawie strzałek
    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (direction !== 'DOWN') setDirection('UP');
                break;
            case 'ArrowDown':
                if (direction !== 'UP') setDirection('DOWN');
                break;
            case 'ArrowLeft':
                if (direction !== 'RIGHT') setDirection('LEFT');
                break;
            case 'ArrowRight':
                if (direction !== 'LEFT') setDirection('RIGHT');
                break;
            default:
                break;
        }
    };

    // Poruszaj wężem
    const moveSnake = () => {
        const newSnake = [...snake];
        const head = newSnake[newSnake.length - 1];
        let newHead;

        switch (direction) {
            case 'UP':
                newHead = [head[0] - 1, head[1]];
                break;
            case 'DOWN':
                newHead = [head[0] + 1, head[1]];
                break;
            case 'LEFT':
                newHead = [head[0], head[1] - 1];
                break;
            case 'RIGHT':
                newHead = [head[0], head[1] + 1];
                break;
            default:
                return;
        }

        newSnake.push(newHead);

        // Sprawdź, czy wąż zjada jedzenie
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
            setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
        } else {
            newSnake.shift(); // Usuń ostatni element, jeśli wąż się nie wydłuża
        }

        // Sprawdź kolizje
        if (
            newHead[0] < 0 ||
            newHead[1] < 0 ||
            newHead[0] >= 20 ||
            newHead[1] >= 20 ||
            newSnake.some((segment, index) => index !== newSnake.length - 1 && segment[0] === newHead[0] && segment[1] === newHead[1])
        ) {
            setGameOver(true);
            return;
        }

        setSnake(newSnake);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        const interval = setInterval(() => {
            if (!gameOver) moveSnake();
        }, 200);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearInterval(interval);
        };
    }, [snake, direction, gameOver]);

    return (
        <div className="snake-game">
            {gameOver ? (
                <h3>Game Over! Refresh to Play Again!</h3>
            ) : (
                <div className="game-board">
                    {snake.map((segment, index) => (
                        <div
                            key={index}
                            className="snake-segment"
                            style={{
                                gridRowStart: segment[0] + 1,
                                gridColumnStart: segment[1] + 1,
                            }}
                        />
                    ))}
                    <div
                        className="food"
                        style={{
                            gridRowStart: food[0] + 1,
                            gridColumnStart: food[1] + 1,
                        }}
                    />
                </div>
            )}
        </div>
    );
};