import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database'

export const convertToArray = data => {
  if (!data) {
    return data
  }
  const result = Object.keys(data).map(key => ({
    id: key,
    ...data[key],
  }))
  return result
}

export const getData = (dataName, uid) =>
  new Promise(resolve => {
    const db = getDatabase()
    const booksRef = uid ? query(ref(db, dataName), orderByChild('userId'), equalTo(uid)) : ref(db, dataName)
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

export const getOrder = id =>
  new Promise(resolve => {
    const db = getDatabase()
    const orderRef = ref(db, `orders/${id}`)
    onValue(orderRef, snapshot => {
      const data = snapshot.val()
      resolve(data)
    })
  })
