import React from 'react'
import { useSelector } from 'react-redux'
import {
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Stack,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import BookIcon from '@mui/icons-material/Book'

import { Status, RightInfo } from './styles'

const Orders = () => {
  const books = useSelector(store => store.example)

  return (
    <List>
      {books.data.length > 0 ? (
        books.data.map((book, index) => {
          if (index < 10) {
            return (
              <ListItem
                key={book.id}
                secondaryAction={
                  <RightInfo>
                    <Status label="Завершен" />
                    <p>20$</p>
                  </RightInfo>
                }
              >
                <ListItemAvatar>
                  <Avatar color="primary">
                    <BookIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={book.title}
                  secondary="Калиновского дом 23 квартира 5"
                />
              </ListItem>
            )
          } else {
            return null
          }
        })
      ) : (
        <p>Заказов пока нет.</p>
      )}
    </List>
  )
}

export default Orders
