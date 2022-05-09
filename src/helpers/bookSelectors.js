import {
  COST_FROM_LOW,
  COST_FROM_UP,
  ALFA,
  POPULAR,
} from '@/constants'

export const getBooksSelector = store => {
  const { authors, categories, filters } =
    store.booksAuthors
  let books = [...store.booksAuthors.books]

  if (filters.sorting !== '') {
    switch (filters.sorting) {
      case COST_FROM_LOW:
        books = books.sort((a, b) => a.price - b.price)
        break
      case COST_FROM_UP:
        books = books.sort((a, b) => b.price - a.price)
        break
      case ALFA:
        books = books.sort((a, b) =>
          a.title > b.title ? 1 : -1,
        )
        break
      case POPULAR:
        break
    }
  }

  return books.filter(book => {
    let isAvailable = true

    if (filters.search !== '') {
      isAvailable = book.title
        .toLowerCase()
        .includes(filters.search.toLowerCase().trim())
    }

    if (filters.authors.length !== 0 && isAvailable) {
      isAvailable = filters.authors.includes(
        authors[book.author].name,
      )
    }

    if (filters.categories.length !== 0 && isAvailable) {
      isAvailable = false
      book.category.forEach(cat => {
        console.log(
          isAvailable,
          categories[cat],
          filters.categories,
        )
        isAvailable =
          filters.categories.includes(
            categories[cat].name,
          ) || isAvailable
      })
    }

    const [lowPrice, upPrice] = filters.price
    isAvailable =
      isAvailable &&
      book.price >= lowPrice &&
      book.price <= upPrice
    return isAvailable
  })
}

export const getBasketBooksSelector = store => {
  const { books } = store.booksAuthors
  const { basket } = store.user

  if (!basket) {
    return []
  }

  return basket.map(basketBook =>
    books.find(book => book.id === basketBook.bookId),
  )
}
