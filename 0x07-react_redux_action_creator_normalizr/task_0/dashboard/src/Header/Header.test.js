import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut, AppContext } from '../App/AppContext';
import Header from './Header';

describe('<Header />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  /*
  it('render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
*/
  it('Header renders without crashing', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });
});