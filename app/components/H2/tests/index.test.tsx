import H2 from 'components/H2';

import expect from 'expect';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('<H2 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H2>{children}</H2>
    );
    expect(renderedComponent.text()).toBe(children).toEqual(true);
  });
});
