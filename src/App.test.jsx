/* eslint-disable no-undef */
// import { render, screen } from '@testing-library/react';
import React from 'react';

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('Counter Testing Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  }, 2000);

  it('renders title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is a counter app');
  });
  it('renders a counter button', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });
  it('renders an initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe(0);
  });
});
