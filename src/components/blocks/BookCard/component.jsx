import * as React from 'react'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
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

const BookCard = ({
  description,
  title,
  category,
  author,
  price,
  img,
}) => {
  const { authors, categories } = useSelector(
    store => store.booksAuthors,
  )

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
        <Add size="large" color="primary">
          {
            // secondary color <AddShoppingCartIcon />
          }
          <DoneOutlineIcon fontSize="large" />
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
}

export default BookCard
