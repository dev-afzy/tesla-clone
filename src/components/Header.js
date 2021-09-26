import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="header_title" />
      </a>
      <Menu>
        <a href="/"> Models S </a>
        <a href="/"> Models 3 </a>
        <a href="/"> Models X </a>
        <a href="/"> Models Y </a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper onClick={() => setBurgerStatus(false)}>
          <CustomClose></CustomClose>
        </CloseWrapper>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">Test Drive</a>
        </li>
        <li>
          <a href="/">Commercial Energy</a>
        </li>
        <li>
          <a href="/">Utilities</a>
        </li>
        <li>
          <a href="/">Charging</a>
        </li>
        <li>
          <a href="/">Find Us</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">Investor Relations</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  top: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.ul`
  position: fixed;
  list-style-type: none;
  top: 0;
  right: 0;
  bottom: 0;
  width: 260px;
  background: white;
  font-size: 14px;
  z-index: 100;
  padding: 30px 17px 20px 23px;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in;
  li {
    padding: 14px 0;
    text-align: start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      text-decoration: none;
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(ClearIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
