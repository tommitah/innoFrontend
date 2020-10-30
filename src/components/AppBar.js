import React from 'react'

import {
  AppBar as MUIAppBar,
  IconButton,
  Toolbar,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

const AppBar = ({ handleDrawer }) => {
  return (
    <MUIAppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MUIAppBar>
  )
}

export default AppBar