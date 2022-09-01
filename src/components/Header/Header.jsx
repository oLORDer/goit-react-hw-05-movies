import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
  color: black;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: orange;
  }
`;

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">movies</NavLinkStyled>
        </nav>
        <hr />
      </header>
    </>
  );
};
