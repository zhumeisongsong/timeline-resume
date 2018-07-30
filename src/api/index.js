/**
 * Mocking client-server processing
 */
import _experience from '../mock/projects.json'

const TIMEOUT = 100

export default {
  getExperience: (cb, timeout) => setTimeout(() => cb(_experience), timeout || TIMEOUT)
}