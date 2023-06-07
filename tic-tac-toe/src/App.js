import { Component, useState } from 'react'
import { Board } from './components/Board.js'

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [XisNext, setXisNext] = useState(true);
  const currentGrid = history[history.length-1];

  function onPlay(nextSquares){
    setHistory([...history, nextSquares]);
    setXisNext(!XisNext);
  }

  return(
    <div className='game'>
      <div className='grid'>
        <Board squares = {currentGrid} XisNext = {XisNext} onPlay = {onPlay}/>
      </div>
      <div className='allMoves'>
        
      </div>
    </div>
  );
}

