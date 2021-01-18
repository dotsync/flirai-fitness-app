/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar Test Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });
  test('should have a logo', () => {
    expect(wrapper.find('.navbar-logo').text()).toContain('flirai');
  });
  test('should have options container for links and search', () => {
    expect(wrapper.find('.navbar-options').text()).toContain('');
  });
  test('should have a player score', () => {
    expect(wrapper.find('.navbar-options').text()).toContain('player score');
  });
});
