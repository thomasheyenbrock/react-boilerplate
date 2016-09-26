/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { selectLocale } from './selectors';

interface IProps {
  locale: string;
  messages: Map<string, string>;
  children: React.ReactNode;
}

export class LanguageProvider extends React.Component<IProps, {}> { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={this.props.messages[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = createSelector(
  selectLocale(),
  (locale) => ({ locale }),
);

export default connect(mapStateToProps)(LanguageProvider);
