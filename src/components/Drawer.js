import React from 'react'
import { Link } from 'react-router-dom'

import {
  Divider,
  Drawer as MUIDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import { ChevronLeft, Inbox, Mail } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }
}))

const Drawer = ({ open, handleDrawer }) => {
  const classes = useStyles()

  return (
    <MUIDrawer
      anchor="left"
      variant="temporary"
      onBackdropClick={handleDrawer}
      onEscapeKeyDown={handleDrawer}
      open={open}>
      <div style={{ width: '250px' }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Profile', 'Test2', 'Test3', 'Test4'].map((text, index) => (
            <ListItem button key={text} component={Link} to="/profile">
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </MUIDrawer>
  )
}

export default Drawer