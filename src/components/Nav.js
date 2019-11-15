import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  text-decoration: none;
  height: 64px;
  align-items: center;
  font-size: 20px;
  width: 100%;
  border-bottom: 1px solid darksalmon;
`;

const StyledNavLink = styled(NavLink)`
  padding: 24px;
  height: 16px;
  color: white;
  background: darksalmon;
  &&:hover {
    background: salmon;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledNavLink exact to="/" activeClassName="activeNavButton">
        Home
      </StyledNavLink>
      <StyledNavLink to="characters" activeClassName="activeNavButton">
        Characters
      </StyledNavLink>
    </StyledNav>
  );
}
