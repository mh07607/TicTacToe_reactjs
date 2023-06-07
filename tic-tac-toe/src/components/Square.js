
export function Square(props){
    return (
      <button className='square' onClick={props.onBtnClick}>{props.value? props.value: ' '}</button>
    );
  }
  