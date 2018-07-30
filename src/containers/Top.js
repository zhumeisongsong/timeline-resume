import React, {Component} from 'react';
import {
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  FormattedPlural,
} from 'react-intl';

import Pagination from '@/components/pagination';

class Top extends Component {
  render() {
    console.log(this.props.intl)
    const { locale } = this.context;
    return (
      <div>sssss</div>
    )
  }
}

export default Top