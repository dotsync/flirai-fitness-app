/* eslint-disable no-undef */
// import { render, screen } from '@testing-library/react';
import React from 'react';

// setup file
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('Counter Testing Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });

  test('renders a title', () => {
    expect(wrapper.find('h2').text()).toContain('Sign Up');
  });
  test('renders a form', () => {
    expect(wrapper.find('form')).exists();
  });
});
