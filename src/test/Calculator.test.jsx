import React from 'react';
import {shallow} from 'enzyme';
import Calculator from '../components/Calculator.jsx';
import Number from '../components/Number.jsx';

test('Change of display when clicking a number', () => {
  const wrapper = shallow(<Calculator />)
  const number = wrapper.find(<Number />).at(2)

  expect(wrapper.state().display).toEqual('');

  number.simulate('click');

  expect(wrapper.state().display).toEqual('1');
});