import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import { Button, Icon } from 'semantic-ui-react'

const HomeButton: FC = () => {
  const navigate = useNavigate()

  return (
    <Button inverted color="orange" onClick={() => navigate('/')}>
      <Icon name="home" />
      ホームへ
    </Button>
  )
}

export default HomeButton
