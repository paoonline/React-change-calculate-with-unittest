import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import Input from './component/calculate'

Enzyme.configure({adapter: new Adapter()})

describe('App calculator', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('change calculator 1 dollar', async () => {
    const wrapper = shallow(<Input/>)
    await wrapper.find('input').simulate('change', { target: { value: 1 } })
    await wrapper.find('button').simulate('click')
    const length = wrapper.state('output').length
    expect(wrapper.state('output')).toHaveLength(length)
  })

  it('change calculator .99 dollar', async () => {
    const wrapper = shallow(<Input/>)
    await wrapper.find('input').simulate('change', { target: { value: .99 } })
    await wrapper.find('button').simulate('click')
    const length = wrapper.state('output').length
    expect(wrapper.state('output')).toHaveLength(length)
  })

  it('change calculator .124.67  dollar', async () => {
    const wrapper = shallow(<Input/>)
    await wrapper.find('input').simulate('change', { target: { value: 124.67  } })
    await wrapper.find('button').simulate('click')
    const length = wrapper.state('output').length
    expect(wrapper.state('output')).toHaveLength(length)
  })
})




