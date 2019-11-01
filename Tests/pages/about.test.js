import React from 'react';
import About from '../../pages/about';
import { shallow } from 'enzyme';
import { findTestByAttr } from '../../Utility';

const setUp = (props={}) => {
  const component = shallow(<About {...props} />);
  return component;
}

describe('Testing About Pages', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without error', () => {
    const wrapper = findTestByAttr(component, 'about');
    expect(wrapper.length).toBe(1);
  });

  it('Should render without error', () => {
    const wrapper = findTestByAttr(component, 'work');
    expect(wrapper.length).toBe(3);
  });

  it('Should render without error', () => {
    const wrapper = findTestByAttr(component, 'skill');
    expect(wrapper.length).toBe(4);
  });
});
