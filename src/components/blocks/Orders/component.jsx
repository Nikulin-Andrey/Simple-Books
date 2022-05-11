import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material'
import AddCardIcon from '@mui/icons-material/AddCard'

import { getOrdersSelector } from '@/helpers'
import { ORDER_STATUS } from '@/constants'
import { updateStatusAction } from '@/actions'
import { Status, RightInfo } from './styles'

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(getOrdersSelector)
  const { admin } = useSelector(store => store.user)

  const handleStatus = id => () => {
    if (admin) {
      dispatch(updateStatusAction(id))
    }
  }

  return (
    <List
      sx={{
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        paddingTop: 0,
      }}
    >
      {orders.length > 0 ? (
        orders.map(order => {
          return (
            <ListItem
              key={order.id}
              sx={{
                borderBottom:
                  '1px solid rgba(0, 0, 0, 0.12)',
              }}
              secondaryAction={
                <RightInfo>
                  <Status label={ORDER_STATUS[order.status]} onClick={admin ? handleStatus(order.id) : null} />
                  <p>{order.totalPrice}$</p>
                </RightInfo>
              }
            >
              <ListItemAvatar>
                <Avatar color="primary">
                  <AddCardIcon />
                </Avatar>
              </ListItemAvatar>
              <List>
                {order.books.map(book => (
                  <ListItem
                    key={book.id}
                    sx={{ paddingBottom: '0px' }}
                  >
                    <ListItemText
                      secondary={book.title}
                      sx={{
                        borderBottom:
                          '1px solid rgba(0, 0, 0, 0.12)',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              {
                admin && (
                  <div>
                    <p>ID пользователя: {order.userId}</p>
                    <p>ID заказа: {order.id}</p>
                  </div>
                )
              }
            </ListItem>
          )
        })
      ) : (
        <p>Заказов пока нет.</p>
      )}
    </List>
  )
}

export default Orders
