import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Top: FC = () => (
  <>
    <Helmet>
      <title>トップ</title>
    </Helmet>
    <Link to="/user/register">
      <Button color="orange">アカウントを作成する</Button>
    </Link>
    <Link to="/user/login">
      <Button color="orange" basic>
        ログイン
      </Button>
    </Link>
  </>
)

export default Top
