import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'
import { InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { Search } from './styles'

const SearchArea = ({ onSearch }) => {
  const [search, setSearch] = useState('')

  return (
    <Search
      value={search}
      onChange={e => setSearch(e.target.value)}
      label="Введите название книги"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton
              color="secondary"
              size="large"
              onClick={() => {
                onSearch(search)
                setSearch('')
              }}
            >
              <SearchIcon
                color="secondary"
                fontSize="large"
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchArea
