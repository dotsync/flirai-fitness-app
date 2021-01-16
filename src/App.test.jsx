/* eslint-disable no-undef */
// import { render, screen } from '@testing-library/react';
import React from 'react';

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('Counter Testing Suite', () => {
  it('renders title of counter', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toContain('This is a counter app');
  });
  it('renders a counter button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });
});