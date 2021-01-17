/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar Test Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  test('should have a title', () => {
    expect(wrapper.find('.navbar').text()).toContain('navbar');
  });
});
