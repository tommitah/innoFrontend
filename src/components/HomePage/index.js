import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me } from '../../_actions/userActions'
import Role from '../../_utils/role'

import WorkerHome from './WorkerHome'
import CompanyHome from './CompanyHome'
import VisitorHome from './VisitorHome'

import {
  CircularProgress,
  Box
} from '@material-ui/core'

const Home = () => {
  const { data, ...user } = useSelector(state => state.user)

  const dispatch = useDispatch()

  // Can be used as a user validation (validates token and user role)
  // Run if user has a role
  useEffect(() => {
    if (data.role) {
      dispatch(me(data.role))
    }
  }, [dispatch, data.role])


  if (user.loading) {
    return <CircularProgress />
  }

  if (!user.loading && !data.role) {
    return <VisitorHome />
  }

  return (
    <Box>
      {data.role === Role.Worker &&
        <WorkerHome />}
      {(data.role === Role.Agency ||
        data.role === Role.Business) &&
        <CompanyHome />}
    </Box>
  )
}

export default Home