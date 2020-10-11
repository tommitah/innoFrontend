import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me } from '../../_actions/userActions'

import { CircularProgress } from '@material-ui/core'

const Profile = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [dispatch])

  if (user.loading || !user.info) {
    return <CircularProgress />
  }
  return (
    <div>
      {Object.keys(user.info).map(key => (
        <div style={{ padding: 4 }} key={key}>
          <span>{key}: </span>
          <span>{user.info[key]}</span>
        </div>
      ))}
    </div>
  )
}

export default Profile