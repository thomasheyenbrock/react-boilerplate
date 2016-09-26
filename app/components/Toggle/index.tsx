/**
*
* LocaleToggle
*
*/

import * as React from 'react';

// import { FormattedMessage } from 'react-intl';
import styles from './styles.css';
import ToggleOption from '../ToggleOption';

interface IProps {
  values: any[];
  messages: Map<string, ReactIntl.FormattedMessage.MessageDescriptor>;
  onToggle: (e: any) => any;
}

class Toggle extends React.Component<IProps, {}> {  // eslint-disable-line react/prefer-stateless-function
  render() {
    let content = [(<option>--</option>)];

    // If we have items, render them
    if (this.props.values) {
      content = this.props.values.map((value) => (
        <ToggleOption key={value} value={value} message={this.props.messages[value]}/>
      ));
    }

    return (
      <select onChange={this.props.onToggle} className={styles.toggle}>
        {content}
      </select>
    );
  }
}

export default Toggle;
