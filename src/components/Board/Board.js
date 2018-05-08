import React from 'react';
import Square from '../Square/Square';
/**
 * Board Component that renderes a board of Squares
 */
class Board extends React.Component {

    constructor(props){
      super(props);
      //console.log(this.props.onClick);
      this.state = {
        squares: this.props.squares,
        xIsNext: this.props.xIsNext
      };
    }
  
    renderSquare(i) {
      //console.log(i);
      //console.log(this.state.squares[i]);

      return <Square 
                key={i}
                id={'square' + i} 
                value={this.props.squares[i]} 
                onClick={()=> this.props.onClick(i)}
                />;
    }
  
    render() {
      return (
        <div>
          {this.createBoard()}
        </div>
      );
    }

    createBoard(){
      var returnArray = [[0,1,2],[3,4,5],[6,7,8]];

      return returnArray.map((rows, index)=>{
        var row = rows.map(cell => { return this.renderSquare(cell)});
        return <div key={index} className="board-row">{row}</div>
      });
    }

  }



  export default Board;