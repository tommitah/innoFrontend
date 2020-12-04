/**
 * Contract requests to backend
 * @module
 */
import axios from 'axios'
import { loadUser } from '../utils/storage'

const baseUrl = 'http://localhost:3001/api'

/**
 * helper function for setting up request header
 * @function
 */
const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` }
  }
}

/**
 * Gets workers or businesses by name (LIKE behavior)
 * @function
 * @param {string} input - input that is searched
 * @param {string} searchType - determines if workers or businesses are searched
 */
const searchUsers = async (input, searchType) => {
  try {
    switch (searchType) {
      case 'worker':
        return await axios.get(`${baseUrl}/users?name=${input}`, authHeader())
      case 'business':
        return await axios.get(`${baseUrl}/businesses?name=${input}`, authHeader())
      default:
        return Promise.reject({ status: 500 })
    }
  } catch (error) {
    return Promise.reject(error.response)
  }
}

export default {
  searchUsers
}