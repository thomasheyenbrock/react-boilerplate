/**
 *
 * ToggleOption
 *
 */

import React = require('react');
import { injectIntl } from 'react-intl';

interface IProps {
  value: string;
  message: ReactIntl.FormattedMessage.MessageDescriptor;
  intl?: ReactIntl.InjectedIntlProps;
}

class ToggleOption extends React.Component<IProps, {}> {
  public render() {
    return (<option value={this.props.value}>
      {this.props.intl.formatMessage(this.props.message)}
    </option>);
  }
}
export default injectIntl(ToggleOption);
