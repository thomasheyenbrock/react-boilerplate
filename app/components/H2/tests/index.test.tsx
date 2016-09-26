import H2 from 'components/H2';

import expect = require('expect');
import { shallow } from 'enzyme';
import React = require('react');

describe('<H2 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H2>{children}</H2>
    );
    expect(renderedComponent.text()).toBe(children).toEqual(true);
  });
});
