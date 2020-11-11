import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar as MUIAppBar,
  IconButton,
  Toolbar,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

/**
 * AppBar component, works as header for the whole page.
 * @exports components/AppBar
 * @param {Object} props
 * @param {function} props.handleDrawer - [Function]{@link module:App~handleDrawer}
 * for opening and closing a [drawer component]{@link module:components/Drawer}
 * @example
 * <AppBar handleDrawer={...} />
 */
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

AppBar.propTypes = {
  handleDrawer: PropTypes.func.isRequired
}

export default AppBar