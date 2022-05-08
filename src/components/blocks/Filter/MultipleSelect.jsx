import React from 'react'
import propTypes from 'prop-types'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import Chip from '@mui/material/Chip'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const MultipleSelect = ({
  elements,
  allElements,
  setElements,
  labelId,
}) => {
  const handleSelect = e => {
    const result =
      typeof e.target.value === 'string'
        ? e.target.value.split(',')
        : e.target.value

    setElements(result)
  }

  return (
    <Select
      labelId={labelId}
      multiple
      value={elements}
      onChange={handleSelect}
      input={<OutlinedInput label="Chip" />}
      renderValue={selected => (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5,
          }}
        >
          {selected.map(value => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )}
      MenuProps={MenuProps}
    >
      {allElements.map(element => (
        <MenuItem key={element.id} value={element.name}>
          {element.name}
        </MenuItem>
      ))}
    </Select>
  )
}

MultipleSelect.propTypes = {
  elements: propTypes.array,
  allElements: propTypes.array,
  setElements: propTypes.func,
  labelId: propTypes.string,
}

export default MultipleSelect
