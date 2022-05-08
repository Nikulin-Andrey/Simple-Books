import { put, call, takeEvery } from 'redux-saga/effects'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

import { setUserAction } from '@/actions'
import { LOG_IN, SIGN_UP } from '@/constants'

function * logIn (action) {
  const { email, password } = action.payload
  try {
    const auth = getAuth()
    const user = yield call(() =>
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log(userCredential)
          return userCredential.user
        })
        .catch(error => {
          console.log(error)
          alert('Неверный логин или пароль')
        }),
    )

    yield put(
      setUserAction({
        token: user.accessToken,
        email: user.email,
        name: user.displayName,
        id: user.uid,
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

function * authWatcher () {
  yield takeEvery(LOG_IN, logIn)
  yield takeEvery(SIGN_UP, signUp)
}

export default authWatcher
