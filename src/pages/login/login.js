import React, { useEffect } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button } from '@material-ui/core'
import { ReactComponent as Logo } from './logo.svg'

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

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Title = styled.h1`
  font-size: 2em;
`

const LoginButton = styled(Button)`
  margin: 1em;
`

const Login = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) console.log(user)
    })
  }, [])
  return (
    <Container>
      <Title>
        Delivery App
      </Title>
      <Logo />
      <LoginButton onClick={() => {
        const provider = new firebase.auth.GithubAuthProvider()
        firebase.auth().signInWithRedirect(provider)
      }}
      >Entrar com github</LoginButton>
    </Container>
  )
}

export default Login
