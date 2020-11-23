import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me } from '../../_actions/userActions'
import Role from '../../_utils/role'

import WorkerHome from './workerHome'
import CompanyHome from './companyHome'

import {
  CircularProgress,
  Box
} from '@material-ui/core'

const Home = () => {
  const { data, ...user } = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(me(data.role))}
  }, [dispatch, data.role])


  if (user.loading) {
    return <CircularProgress />
  }

  return (
    <Box>
      {data.role === Role.Worker &&
          <WorkerHome />}
      {(data.role === Role.Agency ||
          data.role === Role.Business) &&
          <CompanyHome/>}
    </Box>
  )
}

export default Home