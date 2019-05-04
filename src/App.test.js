import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import Input from './component/input'

Enzyme.configure({adapter: new Adapter()})

describe('Test', () => {
  test('renders', () => {
    const wrapper = shallow(<Input/>)
    expect(wrapper.exists()).toBe(true)
  })
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


