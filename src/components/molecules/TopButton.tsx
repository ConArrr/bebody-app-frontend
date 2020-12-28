import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import { Button } from 'semantic-ui-react'

const TopButton: FC = () => {
  const navigate = useNavigate()

  return (
    <Button inverted color="orange" onClick={() => navigate('/')}>
      トップへ
    </Button>
  )
}
export default TopButton
