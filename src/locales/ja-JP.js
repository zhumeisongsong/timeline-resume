import antdJa from 'antd/lib/locale-provider/ja_JP';
import appLocaleData from 'react-intl/locale-data/ja';
import jaMessages from './ja.json';

export default {
  messages: {
    ...jaMessages,
  },
  antd: antdJa,
  locale: 'ja-JP',
  data: appLocaleData,
};
