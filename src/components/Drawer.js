import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { logout } from '../_actions/userActions'

import i18n from '../i18nextInit';
import { useTranslation } from 'react-i18next'

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
import { ChevronLeft, Home, ExitToApp, AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}))

const Drawer = ({ open, handleDrawer, loggedIn }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { t } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <MUIDrawer
      anchor="left"
      variant="temporary"
      onBackdropClick={handleDrawer}
      onEscapeKeyDown={handleDrawer}
      open={open}>
      <div className={classes.drawer}>
        <div>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawer}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List disablePadding>
            <ListItem button component={Link} to="/home">
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary={t('home')} />
            </ListItem>
            {loggedIn &&
              <ListItem button component={Link} to="/profile">
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            }
          </List>
        </div>
        <div>
            <button onClick={() => changeLanguage('fi')}>fi</button>
            <button onClick={() => changeLanguage('en')}>en</button>
        </div>
        <div>
          <Divider />
          {loggedIn ?
            <ListItem button onClick={() => dispatch(logout())}>
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary={t('logout')} />
            </ListItem> :
            <ListItem button component={Link} to="/">
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary={t("log_in")} secondary={t("sign_up")} />
            </ListItem>
          }
        </div>
      </div>
    </MUIDrawer>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool
}

export default Drawer