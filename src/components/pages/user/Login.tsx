import React, { FC, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Breadcrumb, Button, Form, Input, Label } from 'semantic-ui-react'

const Login: FC = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Helmet>
        <title>ログイン</title>
      </Helmet>
      <Form>
        <Label>
          アカウントID
          <Input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Label>
        <Label>
          パスワード
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button inverted color="orange">
          ログイン
        </Button>
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link to="/">パスワードをお忘れですか？</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section>
            <Link to="/user/register">アカウントを作成する</Link>
          </Breadcrumb.Section>
        </Breadcrumb>
      </Form>
    </>
  )
}

export default Login
