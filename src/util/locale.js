/**
 * get locale resource files
 *
 * @param {any} lang
 * @returns
 */
export const getLocale = (lang) => {
  let result = {}
  switch (lang) {
    case 'zh-CN':
      result = require('../locales/zh-Hans')
      break
    case 'en-US':
      result = require('../locales/en-US')
      break
    case 'ja':
      result = require('../locales/ja')
      break
    default:
      result = require('../locales/zh-Hans')
  }

  return result.default || result
}