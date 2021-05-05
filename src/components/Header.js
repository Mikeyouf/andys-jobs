import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import NakedList from '../utils/NakedList';
import Logo from '../images/logo-andy-job.svg';
import media from '../utils/media';

const Nav = styled.nav `
  display: flex;
  justify-content: ${props => (props.logo ? 'space-between' : 'flex-end')};
  align-items: center;
  padding: 0 4rem;
  height: 6rem;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  /* box-shadow: 0px 3px 5px rgba(0,0,0,0.3); */

  ${media.tablet`
    justify-content: center;
  `}
`;

const NavList = styled(NakedList)`
  display: flex;

  ${media.tablet`
    display: none;
  `}
`;

const NavItems = styled.li`
  text-transform: uppercase;
  padding: 0 1rem;
  margin: 0 1rem;

  a {
    text-decoration: none;
    list-style-type: none;
    color: rgba(0,0,0,0.7);
    transition: all 0.2s ease-in;

    &:hover {
      color: #ff4133;
    }
  }
`;

const StyledLogo = styled(Logo)`
  height: 5rem;
`;

const Header = ({ logo }) => (
  <Nav logo={logo}>
    {logo && (
      <Link to={'/'}>
        <StyledLogo />
      </Link>
    )}
    <NavList>
      <NavItems>
        <Link to={'/about'}>À propos</Link>
      </NavItems>
      <NavItems>S'inscrire</NavItems>
    </NavList>
  </Nav>
);

Header.defaultProps = {
  logo: false,
};

Header.propTypes = {
  logo: PropTypes.bool,
};

export default Header;