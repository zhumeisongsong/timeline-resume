import _ from 'lodash'

/**
 * @param {String} url
 * @return {Object} params
 */
export const getQuery = (url) => {
  let params = {}
  let parser = document.createElement('a')
  parser.href = url
  let query = parser.search.substring(1)
  if (query) {
    let vars = query.split('&')
    _.each(vars, function (item) {
      let pair = item.split(/=/)
      params[pair[0]] = decodeURIComponent(pair[1])
    })
  }

  return params
}

/**
 * @param {Object} params
 * @return {String} path
 */
export const setQuery = (params) => {
  let path = "?";
  _.each(params, function (value, key) {
    path += key + '=' + value + '&'
  })
  path = path.substr(0, (path.length - 1))
  return path
}

/**
 * @param {String} url
 * @return {String} url
 */
export const removeQuery = (url) => {
  return url.split('?')[0]
}