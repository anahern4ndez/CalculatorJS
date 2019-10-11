import React from 'react';
import {shallow, mount} from 'enzyme';
import Calculator from '../components/Calculator.jsx';
import Number from '../components/Number.jsx';

describe('Calculator component', () => {

  const wrapper = mount(<Calculator />)
  const number = wrapper.children().find(Number).at(5)
  test('Change of display when clicking a number', () => {
    expect(wrapper.state().display).toEqual('')
    number.simulate('click')
    expect(wrapper.state().display).toEqual(number.props().nvalue.toString())
  })

  test('Append button value when clicked twice', () => {
    number.simulate('click')
    expect(wrapper.state().display).toEqual((number.props().nvalue.toString()).concat(number.props().nvalue.toString()));
  })

  test('Clear display value when C is pressed', () => {
    const clear = wrapper.children().find('Operation[value="C"]')
    expect(wrapper.state().display).toEqual((number.props().nvalue.toString()).concat(number.props().nvalue.toString()));
    clear.simulate('click')
    expect(wrapper.state().display).toEqual('')
  })
})