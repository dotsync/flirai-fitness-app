/* eslint-disable no-undef */
// import { render, screen } from '@testing-library/react';
import React from 'react';

// setup file
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter Testing Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test('renders title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is a counter app');
  });
  test('renders a counter button', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });
  test('renders an initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
  test('renders the click event of increment button and counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
  });
  test('renders the click event of decrement button and counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
});
