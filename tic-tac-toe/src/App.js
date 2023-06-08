import { Component, useState } from 'react' 
import { Board } from './components/Board.js'

export default function Game(){
  const [history, setHistory] = useState([[(Array(9).fill(null)), []]]);
  const [currentMove, setCurrentMove] = useState(0);
  const [listReverse, setListReverse] = useState(false);

  const currentGrid = history[currentMove][0];
  const XisNext = currentMove%2==0;
  
 
  const moves = history.slice(0, history.length-1).map((squares, move)=>{

    return (
      <li key={move}>
        <button onClick={() => {jumpToMove(move)}}>Go to move {move} ({squares[1][0]}, {squares[1][1]})</button>
      </li>
    );
  })

  function jumpToMove(move){
    setCurrentMove(move);
  }

  function onPlay(nextSquares, i){
    const location = [Math.floor(i/3), i%3];
    console.log(location);
    const nextHistory = [...history.slice(0, currentMove+1), [nextSquares, location]];
    setHistory(nextHistory);
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

