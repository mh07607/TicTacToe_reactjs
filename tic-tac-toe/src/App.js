import { Component, useState } from 'react' 
import { Board } from './components/Board.js'

export default function Game(){
  const [winPaths, setWinPaths] = useState([Array(9).fill(false)]);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [listReverse, setListReverse] = useState(false);

  const currentGrid = history[currentMove];
  const currentWinPath = winPaths[currentMove];
  const XisNext = currentMove%2==0;
  

  const moves = history.slice(0, history.length-1).map((squares, move)=>{
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
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares];
    setHistory(nextHistory);
    setWinPaths();
    setCurrentMove(nextHistory.length-1);
  }

  function toggleListOrder(){
    setListReverse(!listReverse);
  }

  return(
    <div className='game'>
      <div className='grid'>
        <Board squares = {currentGrid} XisNext = {XisNext} onPlay = {onPlay}/>
      </div>
      <div className='allMoves'>
        Current Move: {currentMove}
        <button class = 'toggle' onClick={toggleListOrder}>Toggle moves order</button>
        <ol>
          {listReverse ? moves.reverse() : moves} 
        </ol>
        
      </div>
    </div>
  );
}

