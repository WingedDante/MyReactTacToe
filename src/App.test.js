import React from 'react';
import ReactDOM from 'react-dom';
import  App from './App';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Square from './components/Square/Square';
import Board from './components/Board';

const mockFN = jest.fn();
configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

describe('Board', () => {
  it('should fire handle click when square is clicked', () => {
    //ARRANGE
    const spy = jest.spyOn(Board.prototype, 'handleClick');
    const board = shallow(<Board />);
    const instance  = board.instance();
    instance.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
    const testSquare = shallow(<Square value={instance.state.squares[0]} onClick={()=> instance.handleClick(0)}/>);

    //ACT
    testSquare.simulate('click');

    //ASSERT
    expect(spy).toHaveBeenCalled();
  });


});

