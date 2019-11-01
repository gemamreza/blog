import React from 'react';
import Techs from '../../components/techs';
import { shallow } from 'enzyme';
import { findTestByAttr } from '../../Utility';

const setUp = (props={}) => {
  const component = shallow(<Techs {...props} />);
  return component;
}

describe('Testing Techs Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should return the right amount', () => {
    const wrapper = findTestByAttr(component, 'img-test');
    expect(wrapper.length).toBe(5);
  });
});