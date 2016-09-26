import H3 from '../H3';

import expect from 'expect';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('<H3 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H3>{children}</H3>
    );
    expect(renderedComponent.text()).toBe(children).toEqual(true);
  });
});
