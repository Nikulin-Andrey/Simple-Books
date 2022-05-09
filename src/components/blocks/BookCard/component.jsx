import * as React from 'react'
import propTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
  Image,
  Title,
  Description,
  Add,
  Price,
  Bottom,
  Author,
  Categories,
  Category,
} from './styles'
import { addInBasketAction } from '@/actions'

const BookCard = ({
  description,
  title,
  category,
  author,
  price,
  img,
  id,
}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { authors, categories } = useSelector(
    store => store.booksAuthors,
  )
  const user = useSelector(store => store.user)

  const isInBasket =
    user.basket && user.basket.findIndex(book => book.bookId === id) !== -1

  const onAdd = () => {
    if (user.id === null) {
      history.push('/login')
    } else {
      dispatch(addInBasketAction(id))
    }
  }

  return (
    <Card
      variant="outlined"
      sx={{
        width: '32%',
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Image
        component="img"
        height={150}
        xs={{ width: 'initial' }}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Title gutterBottom variant="h4">
          {title}
        </Title>
        <Author variant="h5">{authors[author].name}</Author>
        <Description variant="body1" color="text.secondary">
          {description}
        </Description>
        <Categories direction="row" alignItems="flex-start">
          {category.map(id => (
            <Category
              key={id}
              label={categories[id]?.name}
            />
          ))}
        </Categories>
      </CardContent>
      <Bottom>
        <Add
          size="large"
          color="primary"
          onClick={onAdd}
        >
          {isInBasket ? (
            <DoneOutlineIcon fontSize="large" />
          ) : (
            <AddShoppingCartIcon
              fontSize="large"
              color="secondary"
            />
          )}
        </Add>
        <Price
          variant="h3"
          component="div"
          color="secondary"
        >
          {price}$
        </Price>
      </Bottom>
    </Card>
  )
}

BookCard.propTypes = {
  description: propTypes.string,
  title: propTypes.string,
  category: propTypes.array,
  author: propTypes.string,
  price: propTypes.number,
  img: propTypes.string,
  id: propTypes.string,
}

export default BookCard
