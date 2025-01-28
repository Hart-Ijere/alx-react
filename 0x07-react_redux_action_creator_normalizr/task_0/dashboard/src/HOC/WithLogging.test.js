import React from 'react';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { shallow, mount } from 'enzyme';

describe('<WithLogging />', () => {
  it('render', () => {
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />);
    const wrapper = shallow(<HOC />);
    expect(wrapper.exists());
  });
  
  it('render login', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = shallow(<HOC />);
    expect(wrapper.exists());
  });
  /*
  it('mount and on unmount with login. ', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Login is mounted`
    );
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Login is going to unmount`
    );
    jest.restoreAllMocks();
  });
*/
});