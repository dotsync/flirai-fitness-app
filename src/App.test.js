import { render, screen } from '@testing-library/react';
import App from './App';

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter Testing Suite', () => {
  test('Renders title of counter', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toContain('This is a counter app')
  });
});
