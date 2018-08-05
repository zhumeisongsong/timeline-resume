/**
 * Mocking client-server processing
 */
import keyIndex from 'react-key-index';

import _projects from './projects.json';

const TIMEOUT = 600;

export const getProjects = (lang, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(keyIndex(_projects[lang], 1)),
      timeout || TIMEOUT,
      'done')
  })
}
