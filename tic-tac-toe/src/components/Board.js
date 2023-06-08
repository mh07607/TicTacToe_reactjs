import { useState, useEffect } from 'react';
import { Square } from './Square.js'


export function Board({squares, XisNext, onPlay}){
    
    const gameWinner = gameOver(squares);
    let status = '';
    if(gameWinner[0])
    {
      status = 'Winner: ' + gameWinner[0];
    }
    else{
      if(squares.includes(null)){
        status = 'Next turn:' + (XisNext? 'X': 'O');      
      } else {
        status = "It's a draw!";
      }
    }
  
    function handleClick(i){

      if(squares[i] || gameOver(squares)[0]){
        return;
      }

      let newSquares = squares.slice();
  
      if(XisNext){
        newSquares[i] = 'X';
      } else {
        newSquares[i] = 'O';
      }
      
      onPlay(newSquares);
    }

    function isWinningSquare(index) {
      const [winner, winningCombination] = gameWinner;
      if (!winner) {
        return false;
      }
      return winningCombination.includes(index);
    }

    const boardRows = [];
    for (let row = 0; row < 3; row++) {
      const rowSquares = [];
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        rowSquares.push(
          <Square key={index} value={squares[index]} onBtnClick={() => handleClick(index)} highlight = {isWinningSquare(index)}/>
        );
      }
      boardRows.push(<div className='boardRow' key={row}>{rowSquares}</div>);
    }
  
    return (
      <>
        <div className='status'>{status}</div>
        {boardRows}
      </>
    );
  }
    

  function gameOver(squares){
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for(let i = 0; i < winConditions.length; i++){
      const [a, b, c] = winConditions[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return [squares[a], winConditions[i]];
      }
    }
    return [false];
  }