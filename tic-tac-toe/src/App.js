import { Component } from 'react'

function onBtnClick(count){
    if(count % 2 === 0){
      return(
          <button className="circle">
              O
          </button>
      );
    } else {
      return(
          <button className="square">
              X
          </button>
      );
    } 
}

class Board extends Component{
  constructor(props){
    super(props);
  }
}

export default class App extends Component{
    constructor(){
      super();

      this.state = {
        count: 0, 
      };

      this.countUp = this.countUp.bind(this);
    }

    countUp = () => {
      this.setState({
        count: this.state.count + 1
      });
    };

    render(){
        return(
            <>
                <h1>React App</h1>
                <Square />
            </>
        );
    }
}