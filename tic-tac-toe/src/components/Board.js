import { Square } from './Square.js'


export function Board({squares, XisNext, onPlay}){

    const gameWinner = gameOver(squares);
    let status = '';
    if(gameWinner)
    {
      status = 'Winner: ' + gameWinner;
    }
    else{
      status = 'Next turn:' + (XisNext? 'X': 'O');
    }
  
    function handleClick(i){
      if(squares[i] || gameOver(squares)){
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
  
    return (
      <>
        <div className='status'>{status}</div>
        <div className='boardRow'>
        <Square value = {squares[0]} onBtnClick = {() => handleClick(0)}/>
        <Square value = {squares[1]} onBtnClick = {() => handleClick(1)}/>
        <Square value = {squares[2]} onBtnClick = {() => handleClick(2)}/>
        </div>
        <div className='boardRow'>
        <Square value = {squares[3]} onBtnClick = {() => handleClick(3)}/>
        <Square value = {squares[4]} onBtnClick = {() => handleClick(4)}/>
        <Square value = {squares[5]} onBtnClick = {() => handleClick(5)}/>
        </div>
        <div className='boardRow'>
        <Square value = {squares[6]} onBtnClick = {() => handleClick(6)}/>
        <Square value = {squares[7]} onBtnClick = {() => handleClick(7)}/>
        <Square value = {squares[8]} onBtnClick = {() => handleClick(8)}/>
        </div>
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
        return squares[a];
      }
    }
    return false;
  }