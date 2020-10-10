import axios from 'axios'

const baseUrl = 'http://localhost:3001/user'
/*
const getConfig = () => {
  return {
    headers: { token: `${loadUser().token}` }
  }
}*/

const signup = async credentials => {
  const response = await axios.post(`${baseUrl}/signup`, credentials)
  return response.data
}

const login = async credentials => {
  return await axios.post(`${baseUrl}/login`, credentials)
}

/*
const me = async () => {
  const response = await axios.get(`${baseUrl}/me`, getConfig())
  return response.data
}
*/
export default {
  signup,
  login,
}