/**
 * Mocking client-server processing
 */
import _experience from '../mock/projects.json'

const TIMEOUT = 600

const getProjects = (cb, timeout) =>
  setTimeout(() =>
    cb(_experience), timeout || TIMEOUT)

export default {
  getProjects,
  // getSummary
}