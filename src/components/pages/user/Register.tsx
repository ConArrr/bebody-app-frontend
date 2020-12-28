/* eslint-disable import/no-unresolved */
import React, { FC, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Button, Form, Input, Label, Message } from 'semantic-ui-react'
import TopButton from 'components/molecules/TopButton'

const Register: FC = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword] = useState<string>('')
  const [confirmBool, setConfirmBool] = useState<boolean>(false)

  const confirmInput: () => void = () => {
    const passwordCheck = password !== rePassword
    if (passwordCheck) alert('パスワードが一致しません')
    setConfirmBool(passwordCheck)
  }

  return (
    <>
      <Helmet>
        <title>アカウント登録</title>
      </Helmet>
      <Form error={confirmBool}>
        {confirmBool && (
          <Message error>
            <Message.Header>入力内容を見直してください</Message.Header>
          </Message>
        )}
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
        <Label>
          パスワード（再入力）
          <Input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </Label>
        <Button color="orange" inverted type="submit" onClick={confirmInput}>
          登録
        </Button>
      </Form>
      <TopButton />
    </>
  )
}

export default Register
