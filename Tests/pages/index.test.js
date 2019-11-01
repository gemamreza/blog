import React from 'react';
import Index from '../../pages/index';
import { shallow } from 'enzyme';
import { findTestByAttr } from '../../Utility';

const setUp = () => {
  const component = shallow(<Index />);
  return component;
}

describe('Testing Index Component', () => {

  let component;
  beforeEach(() => {
    component = setUp()
  });

  it('Should render without error', () => {
    const wrapper = findTestByAttr(component, 'title-test');
    expect(wrapper.length).toBe(1);
  });

  it('Should render without error', () => {
    const wrapper = findTestByAttr(component, 'tech-test');
    expect(wrapper.length).toBe(1);
  });
});