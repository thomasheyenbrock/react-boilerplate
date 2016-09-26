import H1 from 'components/H1';

import expect from 'expect';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('<H1 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    expect(renderedComponent.text()).toBe(children).toEqual(true);
  });
});
