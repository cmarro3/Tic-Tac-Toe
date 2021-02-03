import React, {useState} from "react";
import{calculateWinner} from "./helper";
import board from "./board";

const game = () => {
    const [history, sethistroy] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepnumber] = useState(0);
    const [xIsNext, setXisNext]= useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if(winner || squares[i]) return;
        squares[i] = xO;
        sethistroy([...historyPoint, squares]);
        setStepnumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpto = (step) => {
        setStepnumber(step);
        setXisNext(step % 2===0);
    };

    const renderMoves = () =>
        history.map((_step, move) => {
            const destincation = move ? `go to move number${move}`: "go to start"
            return(
                <li key = {move}>
                    <button onClick={()=> jumpto(move)}>{destincation}</button>
                </li>
            );
        });
    
    return (
        <>
        <h1>Tic-Tac_Toe</h1>
        <board squares ={history[stepNumber]} onClick = {handleClick}/>
        <div className = "info-wrapper">
            <div>
            <h3>history</h3>
            {renderMoves()}
        </div>
        <h3>{winner ? "winner: " + winner: "next player" + xO}</h3>
        </div>
        </>
    )
}

export default game;