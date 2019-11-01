import React from 'react';
import Navbar from '../../components/navbar';
import { shallow } from 'enzyme';
import { findTestByAttr } from '../../Utility';

const setUp = () => {
  const component = shallow(<Navbar />);
  return component;
}

describe('Testing Navbar Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without error', () => {
    const wrapper = findTestByAttr(component, 'navbar-wrapper');
    expect(wrapper.length).toBe(1)
  });

  it('Should return the right amount', () => {
    const wrapper = findTestByAttr(component, 'link');
    expect(wrapper.length).toBe(3)
  });
});