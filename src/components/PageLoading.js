import React from 'react'

import { Grid, CircularProgress } from '@material-ui/core'

const PageLoading = () => {
  return (
    <Grid
      container
      justify="center"
      spacing={0}
      alignItems="center"
      style={{ minHeight: '100vh' }}>
      <CircularProgress />
    </Grid>
  )
}

export default PageLoading