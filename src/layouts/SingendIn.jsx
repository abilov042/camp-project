import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SingendIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced = "right" src="WhatsApp Image 2023-08-21 at 21.17.07.jpg" />
        <Dropdown pointing="top left" text="Shamil">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={props.signOut} text="Cikis yap" icon="sign-out"/>
                
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
