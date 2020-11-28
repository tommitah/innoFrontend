import axios from 'axios'
import { loadUser } from '../_utils/storage'

const baseUrl = 'http://localhost:3001/api'

const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` }
  }
}

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