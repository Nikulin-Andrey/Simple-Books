import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {
  getDatabase,
  ref,
  onValue,
} from 'firebase/database'

import {
  getBooksAuthorsAction,
  searchAction,
} from '@/actions'
import Loader from '@/components/common/Loader/component'
import BookCard from '@/components/blocks/BookCard'
import { changeBook } from '@/firebase'
import { getBooksSelector } from '@/helpers'

import { Container, All, Search } from './styles'
import SearchArea from './Search.jsx'

const Books = () => {
  const dispatch = useDispatch()
  const books = useSelector(getBooksSelector)
  const { pending } = useSelector(store => store.booksAuthors)

  const onSearch = useCallback(
    search => {
      dispatch(searchAction(search))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(getBooksAuthorsAction())
    // const db = getDatabase()
    // const starCountRef = ref(db, 'books')
    // onValue(starCountRef, snapshot => {
    //   const data = snapshot.val()
    //   console.log(data, typeof data, Object.keys(data))
    //   const books = Object.keys(data).map(key => ({
    //     id: key,
    //     ...data[key],
    //   }))
    //   console.log(books)

    // books.forEach(book => {
    //   const categories = {
    //     психология: '-',
    //     бизнес: '-N12t8M5fX5SiyVxqF-1',
    //     космос: '-N12sv6rdeAcedvuisyy',
    //     ужасы: '-N12t6H12kAGqoNFhrck',
    //     'художественная литература': '-N12tH9j1ejEoDxjkihD',
    //     фантастика: '-N12tLGMB_AShA91IIsW',
    //     антиутопия: '-N12tOH_ellkrl_wFUXB',
    //   }
    //   const res = book.category.map(cat => categories[cat])
    //   changeBook({ ...book, category: res })
    // })
    // dispatch(setBooksAction(books))
    // })
  }, [])

  if (pending) {
    return <Loader />
  }

  return (
    <All>
      <SearchArea onSearch={onSearch} />
      <Container>
        {books.map(book => (
          <BookCard key={book.id} {...book} />
        ))}
      </Container>
    </All>
  )
}

export default Books
