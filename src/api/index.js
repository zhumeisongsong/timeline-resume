/**
 * Mocking client-server processing
 */
import _experience from './experience.json'

const TIMEOUT = 100

export default {
  getExperience: (cb, timeout) => setTimeout(() => cb(_experience), timeout || TIMEOUT)
}