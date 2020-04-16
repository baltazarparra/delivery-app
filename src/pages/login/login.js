import React from 'react'
import { Button } from '@material-ui/core'
import { ReactComponent as Logo } from './logo.svg'

import styled from 'styled-components'

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

const Login = () => (
  <Container>
    <Title>
      Delivery App
    </Title>
    <Logo />
    <LoginButton>Entrar com github</LoginButton>
  </Container>
)

export default Login
