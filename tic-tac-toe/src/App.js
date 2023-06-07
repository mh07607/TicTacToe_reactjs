import { Component, useState } from 'react'
import { Board } from './components/Board.js'

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentGrid = history[currentMove];
  const XisNext = currentMove%2==0;

  const moves = history.map((squares, move)=>{
    return (
      <li key={move}>
        <button onClick={() => {jumpToMove(move)}}>Go to move {move}</button>
      </li>
    );
  })

  function jumpToMove(move){
    setCurrentMove(move);
  }

  function onPlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  }

  return(
    <div className='game'>
      <div className='grid'>
        <Board squares = {currentGrid} XisNext = {XisNext} onPlay = {onPlay}/>
      </div>
      <div className='allMoves'>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

