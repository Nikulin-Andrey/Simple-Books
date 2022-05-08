import React from 'react'
import { useSelector } from 'react-redux'
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
import { getBasketBooksSelector } from '@/helpers'

import { Container } from './styles'

const Basket = () => {
  const basketBooks = useSelector(getBasketBooksSelector)
  console.log(basketBooks)

  return (
    <Container>
      {basketBooks.length > 0 ? (
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
          <Button variant="outlined" size="large">
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
