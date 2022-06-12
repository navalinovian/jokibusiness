import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import AuthContext from '../context/AuthProvider';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const { auth } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? auth?.user?.username ? (
                  <NavBtnLink to='/profile'>
                    <Button primary>{auth.user.username}</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/login'>
                    <Button primary>Login</Button>
                  </NavBtnLink>
                ) : auth?.user?.username ? (
                  <NavBtnLink to='/profile'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    {auth.user.username}
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/login'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Login
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
