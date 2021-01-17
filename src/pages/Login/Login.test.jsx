/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component test suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test('should have a login component for registered users', () => {
    expect(wrapper.find('.login').text()).toContain('login');
  });
});
