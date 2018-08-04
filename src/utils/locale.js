import zh from '../locales/zh-Hans-CN';
import en from '../locales/en-US';
import ja from '../locales/ja-JP';

/**
 * get locale provider resouce file
 *
 * @param {any} lang
 * @returns
 */
export const getLocale = (lang) => {
  let result = {};
  switch (lang) {
    case 'zh-CN':
      result = zh;
      break;
    case 'en-US':
      result = en;
      break;
    case 'ja-JP':
      result = ja;
      break;
    default:
      result = ja;
  }

  return result.default || result;
};