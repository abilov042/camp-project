import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SingendOut from "./SingendOut";
import SingendIn from "./SingendIn";
import {useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useNavigate()

  function handleSignOut() {
    setIsAuthenticated(false)
    history("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary />}
            {isAuthenticated ? <SingendIn signOut={handleSignOut}/> : <SingendOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
