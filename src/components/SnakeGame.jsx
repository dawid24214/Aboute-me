import React, {useState, useEffect} from "react";
import '../style/_Game.scss';

export const SnakeGame = () => {
    const [snake, setSnake] = useState([[10, 10]]);
    const [food, setFood] = useState([15, 15]);
    const [direction, setDirection] = useState("RIGHT");
    const [gameOver, setGameOver] = useState(false);
    const [isRunning, setIsRunning] = useState(false); // Nowy stan: czy gra jest aktywna

    const handleKeyDown = (e) => {
        if (!isRunning) return; // Nie reaguj na klawisze, jeśli gra nie działa
        switch (e.key) {
            case "ArrowUp":
                if (direction !== "DOWN") setDirection("UP");
                break;
            case "ArrowDown":
                if (direction !== "UP") setDirection("DOWN");
                break;
            case "ArrowLeft":
                if (direction !== "RIGHT") setDirection("LEFT");
                break;
            case "ArrowRight":
                if (direction !== "LEFT") setDirection("RIGHT");
                break;
            default:
                break;
        }
    };

    const moveSnake = () => {
        if (!isRunning) return; // Nie poruszaj węża, jeśli gra jest wstrzymana
        const newSnake = [...snake];
        const head = newSnake[newSnake.length - 1];
        let newHead;

        switch (direction) {
            case "UP":
                newHead = [head[0] - 1, head[1]];
                break;
            case "DOWN":
                newHead = [head[0] + 1, head[1]];
                break;
            case "LEFT":
                newHead = [head[0], head[1] - 1];
                break;
            case "RIGHT":
                newHead = [head[0], head[1] + 1];
                break;
            default:
                return;
        }

        newSnake.push(newHead);

        if (newHead[0] === food[0] && newHead[1] === food[1]) {
            setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
        } else {
            newSnake.shift();
        }

        if (
            newHead[0] < 0 ||
            newHead[1] < 0 ||
            newHead[0] >= 20 ||
            newHead[1] >= 20 ||
            newSnake.some(
                (segment, index) =>
                    index !== newSnake.length - 1 &&
                    segment[0] === newHead[0] &&
                    segment[1] === newHead[1]
            )
        ) {
            setGameOver(true);
            setIsRunning(false); // Zatrzymaj grę
            return;
        }

        setSnake(newSnake);
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        const interval = setInterval(() => {
            moveSnake();
        }, 100);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            clearInterval(interval);
        };
    }, [snake, direction, isRunning, gameOver]);

    const startGame = () => {
        setSnake([[10, 10]]);
        setFood([15, 15]);
        setDirection("RIGHT");
        setGameOver(false);
        setIsRunning(true); // Rozpocznij grę
    };

    return (
        <div className="snake-game">
            {gameOver && <h3>Game Over! Press Start to Play Again!</h3>}
            <button className="start-button" onClick={startGame}>
                {gameOver ? "Restart" : "Start"}
            </button>
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
        </div>
    );
};