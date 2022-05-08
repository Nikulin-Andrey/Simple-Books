import { initializeApp } from 'firebase/app'
import {
  getDatabase,
  ref,
  set,
  push,
} from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
}

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)
const bookListRef = ref(database, 'categories')
const newPostRef = push(bookListRef)
// set(newPostRef, {
//   title: 'Пикник на обочине',
//   author: 'Аркадий Стругацкий, Борис Стругацкий',
//   description:
//     'Человеческое общество столкнулось с чрезвычайными обстоятельствами глобального масштаба. После посещения пришельцами Земли появились... Зоны. Однако общество не готово к "подаркам" пришельцев.',
//   category: ['фантастика', 'художественная литература'],
//   price: 7,
//   img: 'https://s4-goods.ozstatic.by/480/7/424/10/10424007_0_Piknik_na_obochine_Arkadiy_Strugackiy_Boris_Strugackiy.jpg',
// })

const setAuthor = name => {
  set(newPostRef, {
    name,
  })
}
// setAuthor('ужасы')
// setAuthor('бизнес')
// setAuthor('психология')
// setAuthor('космос')

export const changeBook = book => {
  console.log(book)
  const referense = ref(database, 'books/' + book.id)
  set(referense, {
    title: book.title,
    author: book.author,
    description: book.description,
    category: book.category,
    price: book.price,
    img: book.img,
  })
}

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBYZVsXs8ACGMLcTR8OVsBh9uZzdElR15o",
//   authDomain: "simple-books-577fe.firebaseapp.com",
//   projectId: "simple-books-577fe",
//   storageBucket: "simple-books-577fe.appspot.com",
//   messagingSenderId: "390884935421",
//   appId: "1:390884935421:web:794e582726b5977ded6094"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
