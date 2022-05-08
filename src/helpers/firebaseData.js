import {
  getDatabase,
  ref,
  onValue,
} from 'firebase/database'

export const convertToArray = data => {
  console.log(data)
  const result = Object.keys(data).map(key => ({
    id: key,
    ...data[key],
  }))
  console.log(result)
  return result
}

export const getData = dataName =>
  new Promise(resolve => {
    const db = getDatabase()
    const booksRef = ref(db, dataName)
    onValue(booksRef, snapshot => {
      const data = snapshot.val()
      if (
        dataName === 'authors' ||
        dataName === 'categories'
      ) {
        resolve(data)
      }
      const result = convertToArray(data)
      resolve(result)
    })
  })
