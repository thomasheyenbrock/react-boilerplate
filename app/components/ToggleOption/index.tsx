/**
*
* ToggleOption
*
*/

import * as React from 'react';
import { injectIntl } from 'react-intl';

interface IProps {
  value: string;
  message: ReactIntl.FormattedMessage.MessageDescriptor;
  intl?: ReactIntl.InjectedIntlProps;
}

class ToggleOption extends React.Component<IProps, {}> {
  render() {
    return (<option value={this.props.value}>
      {this.props.intl.formatMessage(this.props.message)}
    </option>);
  }
}
export default injectIntl(ToggleOption);
