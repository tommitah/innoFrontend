import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  Container,
  Typography,
  Paper,
  List,
  Grid
} from '@material-ui/core'
import { Assessment as AssessmentIcon, Message as MessageIcon, InsertDriveFile as InsertDriveFileIcon, Assignment as AssignmentIcon }  from '@material-ui/icons'

const CompanyHome = () => {

  const handlePageChange  = () => {
    window.location.href='/home'
  }

  const useStyles = makeStyles(({
    clickableIcon: {
      color: 'black',
      '&:hover': {
        color: 'blue',
      },
      width: 60,
      height: 60,
    /*minWidth: 220, set space between icons*/
    },
    textAlignAssignment: {
      width: '5px',
      height: '15px',
      textAlign: 'center'
    },
    alignItemsAndJustifyContent: {
      width: '100%',
      padding: '30px',
      margin: '20px',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
  }))

  const classes = useStyles()

  return (
    <Container>
      <Card variant="outlined">
        <Paper
          elevation={5}
          style={{ padding: '5em' }}
          className="paper-container"
        >
          <Typography variant="h6">Tiedotteet</Typography>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
          <List m={0.1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </List>
        </Paper>
      </Card>
      <Grid spacing={8} justify="space-around" container direction="row" mt={5} className={classes.alignItemsAndJustifyContent}>
        <Grid item xs>
          <AssessmentIcon onClick={handlePageChange}
            className={classes.clickableIcon}>
          </AssessmentIcon>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="h7">Perehdytys</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <AssignmentIcon onClick={handlePageChange}
            className={classes.clickableIcon}>
          </AssignmentIcon>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="h7">Tehtävä-lista</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <InsertDriveFileIcon onClick={handlePageChange}
            className={classes.clickableIcon}>
          </InsertDriveFileIcon>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="h7">Asiakirjat</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <MessageIcon onClick={handlePageChange}
            className={classes.clickableIcon}>
          </MessageIcon>
          <Grid item className={classes.textAlignAssignment}>
            <Typography variant="h7">Viestit</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CompanyHome