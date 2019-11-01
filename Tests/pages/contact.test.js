import React from 'react';
import Contact from '../../pages/contact';
import { shallow } from 'enzyme';
import { findTestByAttr } from '../../Utility';

const setUp = () => {
  const component = shallow(<Contact />);
  return component;
}

describe('Testing about pages', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without error', () => {
    const wrapper = findTestByAttr(component, 'contact-me');
    expect(wrapper.length).toBe(1);
  });
});