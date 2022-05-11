import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import BookIcon from '@mui/icons-material/Book'

import Loader from '@/components/common/Loader'
import { getBasketBooksSelector } from '@/helpers'
import {
  createOrderAction,
  removeFromBasketAction,
} from '@/actions'

import { Container } from './styles'

const Basket = () => {
  const dispatch = useDispatch()
  const basketBooks = useSelector(getBasketBooksSelector)
  const { basket } = useSelector(store => store.user)

  const onDelete = bookId => () => {
    const book = basket.find(el => el.bookId === bookId)
    console.log(book, basket)
    dispatch(removeFromBasketAction(book.id))
  }

  const onCreateOrder = () => {
    dispatch(createOrderAction(basket))
  }

  return (
    <Container>
      {basketBooks && basketBooks.length > 0 ? (
        <>
          <List>
            {basketBooks.map((book, index) => {
              if (index < 10) {
                return (
                  <ListItem
                    key={book.id}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={onDelete(book.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar color="primary">
                        <BookIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={book.title}
                      secondary={`${book.price}$`}
                    />
                  </ListItem>
                )
              } else {
                return null
              }
            })}
          </List>
          <Button
            variant="outlined"
            size="large"
            onClick={onCreateOrder}
          >
            Оформить заказ
          </Button>
        </>
      ) : (
        <p>Корзина пуста.</p>
      )}
    </Container>
  )
}

export default Basket
