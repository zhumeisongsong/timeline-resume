/**
 * Mocking client-server processing
 */

import _introduction from './introduction.json';
import _skill from './skill.json';
import _projects from './projects.json';

const TIMEOUT = 600;

export const getIntroduction = (lang, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(_introduction[lang]),
      timeout || TIMEOUT,
      'done')
  })
}


export const getSkill = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(_skill),
      timeout || TIMEOUT,
      'done')
  })
}


export const getProjects = (lang, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(_projects[lang]),
      timeout || TIMEOUT,
      'done')
  })
}

