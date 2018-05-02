import React from 'react';
import ReactDOM from 'react-dom';
import  App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

const mockFN = jest.fn();
configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('board-buttons', () => {
  it('should display x when clicked', () => {
    const squareComponent = renderer.create(<Board />);
    const tree = squareComponent.toTree();

    
    expect(mockFN).toHaveBeenCalled();
  })
});

