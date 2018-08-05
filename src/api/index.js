/**
 * Mocking client-server processing
 */
import keyIndex from 'react-key-index';

import _projects from './projects.json';

const TIMEOUT = 600;

const getProjects = (lang, cb, timeout) =>
  setTimeout(() =>
    cb(keyIndex(_projects[lang], 1)), timeout || TIMEOUT);

export default {
  getProjects,
  // getSummary
}