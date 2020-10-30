import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me } from '../../_actions/userActions'
import Role from '../../_utils/role'

import WorkerProfile from './WorkerProfile'

import { CircularProgress } from '@material-ui/core'

const Profile = () => {
  const { data, ...user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [dispatch])

  if (user.loading || !user.profile) {
    return <CircularProgress />
  }
  if (data.role === Role.Worker) {
    return (
      <div>
        <p>worker</p>
        <WorkerProfile profile={user.profile} />
      </div>
    )
  } else if (data.role === Role.Agency) {
    return (
      <div>
        <p>{JSON.stringify(user.profile)}</p>
      </div>
    )
  } else if (data.role === Role.Business) {
    return (
      <div>
        <p>{JSON.stringify(user.profile)}</p>
      </div>
    )
  }
  return (
    <div>no role</div>
  )
}

export default Profile