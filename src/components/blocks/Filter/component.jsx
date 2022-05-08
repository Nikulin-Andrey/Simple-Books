import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Button, Typography } from '@mui/material'
import { convertToArray } from '@/helpers'

import { COST_FROM_LOW, COST_FROM_UP, ALFA, POPULAR } from '@/constants'
import { setFilters } from '@/actions'

import {
  Container,
  CustomizedSlider,
  Form,
  Title,
} from './styles'

import MultipleSelect from './MultipleSelect'

const valuetext = value => `${value}$`

const Filter = () => {
  const dispatch = useDispatch()

  const [sorting, setSorting] = useState('')
  const { authors, categories } = useSelector(
    store => store.booksAuthors,
  )
  const [selectedAuthors, setAuthors] = useState([])
  const [selectedCategories, setCategories] = useState([])
  const [price, setPrice] = useState([0, 100])

  const onFilter = () => {
    dispatch(
      setFilters({
        sorting,
        authors: selectedAuthors,
        categories: selectedCategories,
        price,
      }),
    )
  }

  return (
    <Container elevation={2}>
      <Title gutterBottom variant="h6">
        Сортировка
      </Title>
      <Form fullWidth size="small">
        <InputLabel id="sort">Сортировать по</InputLabel>
        <Select
          labelId="sort"
          value={sorting}
          label="Сортировать по"
          onChange={e => setSorting(e.target.value)}
        >
          <MenuItem value={POPULAR}>Популярности</MenuItem>
          <MenuItem value={COST_FROM_LOW}>Сначала дешевые</MenuItem>
          <MenuItem value={COST_FROM_UP}>Сначала дорогие</MenuItem>
          <MenuItem value={ALFA}>Алфавиту</MenuItem>
        </Select>
      </Form>
      <Title gutterBottom variant="h6">
        Автор
      </Title>
      <Form fullWidth size="small">
        <InputLabel id="author">Автор</InputLabel>
        <MultipleSelect
          elements={selectedAuthors}
          allElements={convertToArray(authors)}
          setElements={setAuthors}
          labelId="author"
        />
      </Form>
      <Title gutterBottom variant="h6">
        Категория
      </Title>
      <Form fullWidth size="small">
        <InputLabel id="category">Категория</InputLabel>
        <MultipleSelect
          elements={selectedCategories}
          allElements={convertToArray(categories)}
          setElements={setCategories}
          labelId="category"
        />
      </Form>
      <Title gutterBottom variant="h6">
        Стоимость
      </Title>
      <Typography color="secondary">
        от {price[0]}$ до {price[1]}$
      </Typography>
      <CustomizedSlider
        size="small"
        getAriaLabel={() => 'Price range'}
        value={price}
        onChange={(e, newValue) => setPrice(newValue)}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <Button
        color="secondary"
        variant="contained"
        onClick={onFilter}
      >
        Фильтровать
      </Button>
    </Container>
  )
}

export default Filter
