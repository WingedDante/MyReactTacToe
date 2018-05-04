```js
require('./Square.css');

class SquareExample extends React.Component {
  constructor() {
    super()
    this.state = {
      square: null,
      xIsNext: true
    }
    this.handleClick = function (i) {
        this.state.xIsNext ? i = 'X' : i = 'O'; 
        this.setState({
            square: i,
            xIsNext : !this.state.xIsNext
        });
    };
  }
  render() {
    return (
      <div>
        <Square value={this.state.square} onClick={()=> {this.handleClick(this.state.square)}} />
      </div>
    )
  }
}
<SquareExample />
```