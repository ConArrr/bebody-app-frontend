/* eslint-disable import/no-unresolved */
import React, { FC } from 'react'
import { Route, Routes } from 'react-router'

import Top from 'components/pages/Top'
import Register from 'components/pages/user/Register'
import { Container } from 'semantic-ui-react'

import './App.css'
import Login from 'components/pages/user/Login'

const App: FC = () => (
  <Container fluid>
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/user">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </Container>
)

export default App
