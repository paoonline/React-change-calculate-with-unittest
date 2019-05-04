import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import Input from './component/calculate'

Enzyme.configure({adapter: new Adapter()})

const ModalTest = async (number) => {
  const wrapper = shallow(<Input/>)
  await wrapper.find('input').simulate('change', { target: { value: number} })
  await wrapper.find('button').simulate('click')
  const length = wrapper.state('output').length
  expect(wrapper.state('output')).toHaveLength(length)
}

describe('App calculator', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('change calculator 1 dollar', () => {
    ModalTest(1)
  })

  it('change calculator .99 dollar', () => {
    ModalTest(.99)
  })

  it('change calculator 124.67  dollar', () => {
    ModalTest(124.67)
  })
})




