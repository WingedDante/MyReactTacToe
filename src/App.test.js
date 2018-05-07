import React from 'react';
import ReactDOM from 'react-dom';
import  App from './App';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Square from './components/Square/Square';
import Board from './components/Board/Board';

const mockFN = jest.fn();
configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

