import React from 'react';
import ReactDOM from 'react-dom';
import  App from '../../App';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Square from '../Square/Square';
import Game from './Game';

const mockFN = jest.fn();
configure({ adapter: new Adapter() });


describe('Game', () => {
it('should fire handle click when square is clicked', () => {
    //ARRANGE
    const spy = jest.spyOn(Game.prototype, 'handleClick');
    const game = shallow(<Game />);
    const instance  = game.instance();
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
  it('should be able to calculate winner when 3 squares match', () =>{

    const game = shallow(<Game />);
    const instance  = game.instance();
    instance.setState({
      history: [{
        squares: ['X', 'X', 'X', 'O', 'O', null, null, null, null]
      }],
      xIsNext: true
    });

    expect(instance.calculateWinner(instance.state.history[0].squares)).toBeTruthy();
  });
});