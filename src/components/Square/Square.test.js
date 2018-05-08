import React from 'react';
import ReactDOM from 'react-dom';
import  App from '../../App';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Square from '../Square/Square';
import Game from '../Game/Game';

const mockFN = jest.fn();
configure({ adapter: new Adapter() });

describe('Square', () => {
    it('should execute onclick function when clicked', () => {
      //ARRANGE
      const output = shallow(<Square onClick={mockFN}/>);
      //ACT
      output.simulate('click');
      //ASSERT
      expect(mockFN).toHaveBeenCalled();
    });
    
    it('displays x first when clicked ', () => {
       //ARRANGE
       //const spy = jest.spyOn(Board.prototype, 'handleClick');
       const game = shallow(<Game />);
       const instance  = game.instance();
       instance.setState({
        history: [{
          squares: Array(9).fill(null)
        }],
         xIsNext: true
       });
       const testSquare = shallow(<Square value={instance.state.history[instance.state.history.length-1].squares[0]} onClick={()=> instance.handleClick(0)}/>);
   
       //ACT
       testSquare.simulate('click');
   
       //ASSERT
       //expect(spy).toHaveBeenCalled();
       //console.log(testSquare.render().text());
       let ex = instance.state.history[instance.state.history.length -1].squares[0];
  
       expect(instance.state.history[instance.state.history.length -1].squares[0]).toBe('X');
    });
  
  });