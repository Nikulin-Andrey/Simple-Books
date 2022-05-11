import { put, call, takeEvery, select } from 'redux-saga/effects'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import {
  getDatabase,
  ref,
  set,
  push,
  remove,
  update,
} from 'firebase/database'

import { getData, getOrder } from '@/helpers'
import { changeBasketAction, changeOrdersAction, setUserAction } from '@/actions'
import { LOG_IN, SIGN_UP, ADD_IN_BASKET, REMOVE_FROM_BASKET, CREATE_ORDER, UPDATE_STATUS } from '@/constants'

function * logIn (action) {
  const { email, password } = action.payload
  try {
    const auth = getAuth()
    const user = yield call(() =>
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          return userCredential.user
        })
        .catch(error => {
          console.log(error)
          alert('Неверный логин или пароль')
        }),
    )
    const basket = yield getData('basket/' + user.uid)
    const admin = yield getData('admins/' + user.uid)
    const orders = admin ? yield getData('orders') : yield getData('orders/', user.uid)

    yield put(
      setUserAction({
        token: user.accessToken,
        email: user.email,
        name: user.displayName,
        id: user.uid,
        basket,
        orders,
        admin: !!admin,
      }),
    )
  } catch (error) {
    yield put()
  }
}

function * signUp (action) {
  const { email, password, name } = action.payload
  try {
    const auth = getAuth()
    console.log(auth)
    const user = yield call(() =>
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log(userCredential)
          updateProfile(auth.currentUser, {
            displayName: name,
          })
          return userCredential.user
        })
        .catch(error => {
          console.log(error)
          alert('Неверный логин или пароль')
        }),
    )

    console.log(user.displayName, user, name)

    yield put(
      setUserAction({
        token: user.accessToken,
        email: user.email,
        name: name,
        id: user.uid,
      }),
    )
  } catch (error) {
    yield put()
  }
}

function * addInbasket (action) {
  try {
    const { user } = yield select()
    console.log(user)

    const db = getDatabase()
    const basketRef = ref(db, 'basket/' + user.id)
    const basketBooksRef = push(basketRef)

    yield set(basketBooksRef, {
      bookId: action.payload,
    })

    const basket = yield getData('basket/' + user.id)
    console.log(basket)

    yield put(changeBasketAction(basket))
  } catch (e) {
    console.log(e)
  }
}

function * removeFromBasket (action) {
  try {
    const { user } = yield select()

    const db = getDatabase()
    const basketRef = ref(db, `basket/${user.id}/${action.payload}`)

    remove(basketRef)

    const basket = yield getData('basket/' + user.id)

    yield put(changeBasketAction(basket))
  } catch (e) {
    console.log(e)
  }
}

function * createOrder (action) {
  try {
    const { user } = yield select()
    const idBooks = action.payload.map(el => el.bookId)
    console.log(user)

    const db = getDatabase()
    const ordersRef = ref(db, 'orders')
    const ordersPushRef = push(ordersRef)

    yield set(ordersPushRef, {
      idBooks,
      status: 'IN_PROGRESS',
      userId: user.id,
    })

    const orders = yield getData('orders/', user.id)

    yield put(changeOrdersAction(orders))
  } catch (e) {
    console.log(e)
  }
}

function * updateStatus (action) {
  try {
    const { user } = yield select()
    const admin = yield getData('admins/' + user.id)
    if (admin) {
      const db = getDatabase()
      const orderRef = ref(db, `orders/${action.payload}`)

      const order = yield getOrder(action.payload)

      yield update(orderRef, {
        ...order,
        status: 'DONE',
      })

      const orders = yield getData('orders')

      yield put(changeOrdersAction(orders))
    }
  } catch (e) {
    console.log(e)
  }
}

function * authWatcher () {
  yield takeEvery(LOG_IN, logIn)
  yield takeEvery(SIGN_UP, signUp)
  yield takeEvery(ADD_IN_BASKET, addInbasket)
  yield takeEvery(REMOVE_FROM_BASKET, removeFromBasket)
  yield takeEvery(CREATE_ORDER, createOrder)
  yield takeEvery(UPDATE_STATUS, updateStatus)
}

export default authWatcher
