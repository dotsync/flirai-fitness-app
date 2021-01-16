/* eslint-disable no-undef */
// import { render, screen } from '@testing-library/react';
import React from 'react';

// setup file
import { shallow } from 'enzyme';
import App from './App';

describe('Counter Testing Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is a counter app');
  });
  it('renders a counter button', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });
  it('renders an initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
  it('renders the click event of increment button and counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
  });
  it('renders the click event of decrement button and counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
});
