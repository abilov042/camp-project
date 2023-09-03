import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SingendOut(props) {
  return (
    <div>
        <Menu.Item>
            <Button onClick={props.signIn} primary>Giris yap</Button>
            <Button primary style={{marginLeft:"0.5em"}}>Kayit yap</Button>
        </Menu.Item>
      
    </div>
  )
}
