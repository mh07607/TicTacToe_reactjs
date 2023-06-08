
export function Square(props){
    let bgColor = '';
    if(props.highlight){bgColor = "yellow";}
    else {bgColor = "white";}
    return (
      <button className='square' onClick={props.onBtnClick} style={{backgroundColor: bgColor}}>
        {props.value? props.value: ' '}
      </button>
    );
  }
  