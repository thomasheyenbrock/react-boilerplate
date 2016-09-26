import H1 from 'components/H1';

import expect = require('expect');
import { shallow } from 'enzyme';
import React = require('react');

describe('<H1 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    expect(renderedComponent.text()).toBe(children).toEqual(true);
  });
});
