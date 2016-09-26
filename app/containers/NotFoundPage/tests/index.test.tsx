/**
 * Testing the NotFoundPage
 */

import expect, { createSpy } from 'expect';
import { shallow, mount } from 'enzyme';
import * as React from 'react';

import { NotFound } from 'containers/NotFoundPage';
import H1 from 'components/H1';
import Button from 'components/Button';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    expect(renderedComponent.contains(<H1>Page not found.</H1>)).toEqual(true);
  });

  it('should render a button', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    const renderedButton = renderedComponent.find(Button);
    expect(renderedButton.length).toEqual(1);
  });

  it('should link to "/"', () => {
    const changeRouteSpy = createSpy();
    const onChangeRoute = (dest) => {
      if (dest === '/') {
        changeRouteSpy();
      }
    };

    const renderedComponent = mount(
      <NotFound changeRoute={onChangeRoute} />
    );
    const button = renderedComponent.find('button');
    button.simulate('click');
    expect(changeRouteSpy).toHaveBeenCalled();
  });
});
