import React, { useState } from 'react'

import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

const WorkerSearch = ({ fetchWorkers }) => {
  const [input, setInput] = useState('')
  const [searchType, setSearchType] = useState('name')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (input.length > 0) {
      fetchWorkers(input, searchType)
    }
  }

  const handleChange = (event) => {
    setSearchType(event.target.value)
  }

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      flexWrap="wrap">
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="search type"
          row
          name="searchType"
          value={searchType}
          onChange={handleChange}>
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel value="id" control={<Radio />} label="ID" />
        </RadioGroup>
      </FormControl>
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center">
          <InputBase
            placeholder={`search with ${searchType}`}
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  )
}

export default WorkerSearch