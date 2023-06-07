import { Component, useState } from 'react'


export function Square(props){
  return (
    <button className='square' onClick={props.onBtnClick}>{props.value}</button>
  );
}



export default function Board(){
  const [count, setCount] = useState(0);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if(squares[i]){
      return;
    }

    let newSquares = squares;

    if(count % 2 == 0){
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }

    setSquares(newSquares);
    setCount(count+1);
  }

  return (
    <>
      <div>
      <Square value = {squares[0]} onBtnClick = {() => handleClick(0)}/>
      <Square value = {squares[1]} onBtnClick = {() => handleClick(1)}/>
      <Square value = {squares[2]} onBtnClick = {() => handleClick(2)}/>
      </div>
      <div>
      <Square value = {squares[3]} onBtnClick = {() => handleClick(3)}/>
      <Square value = {squares[4]} onBtnClick = {() => handleClick(4)}/>
      <Square value = {squares[5]} onBtnClick = {() => handleClick(5)}/>
      </div>
      <div>
      <Square value = {squares[6]} onBtnClick = {() => handleClick(6)}/>
      <Square value = {squares[7]} onBtnClick = {() => handleClick(7)}/>
      <Square value = {squares[8]} onBtnClick = {() => handleClick(8)}/>
      </div>
    </>
  );
}