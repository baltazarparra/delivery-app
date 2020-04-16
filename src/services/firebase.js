import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAPOdSWubmp9q7OxceTwoWdFoNGQRxKJ2g',
  authDomain: 'deliveryapp-4db44.firebaseapp.com',
  databaseURL: 'https://deliveryapp-4db44.firebaseio.com',
  projectId: 'deliveryapp-4db44',
  storageBucket: 'deliveryapp-4db44.appspot.com',
  messagingSenderId: '746638879646',
  appId: '1:746638879646:web:6700eda06f57e341cb048f',
  measurementId: 'G-NYP8VYZF1L'
}

firebase.initializeApp(firebaseConfig)

export default firebase
