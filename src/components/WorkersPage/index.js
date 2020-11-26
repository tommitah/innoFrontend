import React, { useState } from 'react'
import workersService from '../../_services/workersService'

import WorkerSearch from './WorkerSearch'
import SearchTable from './SearchTable'
import WorkerModal from './WorkerModal'

import {
  Card,
  Container,
  Divider,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0)
  },
}))

const WorkersPage = () => {
  const [workers, setWorkers] = useState([])
  const [workerData, setWorkerData] = useState(null)
  const [displayModal, setDisplayModal] = useState(false)
  const classes = useStyles()

  const fetchWorkers = async (input, searchType) => {
    // siirto reduxiin
    const result = await workersService.searchWorkers(input, searchType)
    setWorkers(result.data)
  }

  const openModal = (worker) => {
    setWorkerData(worker)
    setDisplayModal(true)
  }

  return (
    <Container maxWidth="lg">
      <Typography style={{ paddingTop: '1rem' }} align="center" variant="h4">
        Workers
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            add workers
          </Typography>
          <WorkerSearch fetchWorkers={fetchWorkers} />
          <Divider />
          {workers.length ?
            <SearchTable
              workers={workers}
              addWorker={openModal}  /> :
            <Typography style={{ padding: '1rem' }} variant="h6" align="center">
              nothing here
            </Typography>
          }
        </CardContent>
      </Card>
      <WorkerModal
        displayModal={displayModal}
        closeModal={() => setDisplayModal(false)}
        workerData={workerData}
      />
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            current workers
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default WorkersPage