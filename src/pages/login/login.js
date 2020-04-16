import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import firebase from 'services/firebase'
import { ReactComponent as Logo } from './logo.svg'

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
  const [isUserLogged, setUserLogged] = useState(false)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserLogged(true)
        setUserData(user)
      } else {
        setUserLogged(false)
        setUserData(null)
      }
    })
  }, [])

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserLogged(false)
      setUserData(null)
    })
  }, [])

  return (
    <Container>
      <Title>
        Delivery App
      </Title>
      <Logo />
      {isUserLogged && userData && (
        <>
          Você está logado como: {userData.displayName}
          <Button onClick={logout}>
            Sair
          </Button>
        </>
      )}
      {!isUserLogged && (
        <LoginButton onClick={login}>
          Entrar com github
        </LoginButton>
      )}
    </Container>
  )
}

export default Login
