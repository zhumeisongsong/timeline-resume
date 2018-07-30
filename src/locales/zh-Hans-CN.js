import antdJa from 'antd/lib/locale-provider/ja_JP';
import appLocaleData from 'react-intl/locale-data/zh';
import zhMessages from './zh.json';

export default {
  messages: {
    ...zhMessages,
  },
  antd: null,
  locale: 'zh-Hans-CN',
  data: appLocaleData,
};
