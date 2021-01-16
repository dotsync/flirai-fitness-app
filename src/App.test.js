import { render, screen } from '@testing-library/react';
import App from './App';

// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter Testing Suite', () => {
  test('Renders title of counter', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug());
    render(<App />);
    const linkElement = screen.getByText('This is counter app');
    expect(linkElement).toBeInTheDocument();
  });
});
