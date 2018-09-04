import _ from 'lodash';
import map from '../constants/dataMap';
/**
 * format DBC to SBC
 *
 * @param {String} string
 * @return {Object} result
 */
export const DBC2SBC = (string) => {
  if (string) {
    let result = "";
    let len = string.length;
    for (let i = 0; i < len; i++) {
      let cCode = string.charCodeAt(i);
      cCode = (cCode >= 0xFF01 && cCode <= 0xFF5E) ? (cCode - 65248) : cCode;
      cCode = (cCode === 0x03000) ? 0x0020 : cCode;
      result += String.fromCharCode(cCode)
    }
    return result
  }
};

/**
 * nl to br
 *
 * @param {String} string
 * @return {Object} result
 */
export const nl2br = (string) => {
  let breakTag = '<br>';
  return (string + '').replace(/(\r\n|\n|\r)/gm, breakTag)
};

/**
 * get value by key
 *
 * @param {String} mapType
 * @param {String} key
 * @return {Object} result
 */
export const key2value = (mapType, key) => {

  let keyArr = key.split(',');
  let valueArr = [];
  keyArr.map((val) => {
    let index = _.findIndex(map[mapType], {id: parseInt(val, 10)});
    valueArr.push(map[mapType][index].name)
  });
  return valueArr
};