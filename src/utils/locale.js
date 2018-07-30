import zh from '../locales/zh-Hans-CN'
import en from '../locales/en-US'
import ja from '../locales/ja-JP'

/**
 * get locale provider resouce file
 *
 * @param {any} lang
 * @returns
 */
export const getLocale = (lang) => {
  /* eslint-disable global-require */
  let result = {};
  switch (lang) {
    case 'zh-CN':
      result = zh;
      break;
    case 'en-US':
      result = en;
      break;
    case 'ja_JP':
      result = ja;
    default:
      result = zh;
  }

  return result.default || result;
  /* eslint-enable global-require */
}