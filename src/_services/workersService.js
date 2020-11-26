import axios from 'axios'
import { loadUser } from '../_utils/storage'

const baseUrl = 'http://localhost:3001/api'

const authHeader = () => {
  return {
    headers: { 'x-access-token': `${loadUser().token}` }
  }
}

const searchWorkers = async (input, searchType) => {
  try {
    return await axios.get(`${baseUrl}/users?${searchType}=${input}`, authHeader())
  } catch (error) {
    return Promise.reject(error.response)
  }
}

export default {
  searchWorkers
}