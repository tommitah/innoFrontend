import React, { useEffect, useState } from 'react'
import userService from '../../_services/userService'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    userService.me().then(response => setUser(response))
  }, [])

  if (user) {
    return (
      <div>
        {Object.keys(user).map(key => (
          <div style={{ padding: 4 }} key={key}>
            <span>{key}: </span>
            <span>{user[key]}</span>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div>loading...</div>
  )
}

export default Profile