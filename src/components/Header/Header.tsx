import React from "react";

import { HeaderSection } from "./Header.element";

import NavList from "./NavList";

function Header() {
  return (
    <header>
      <HeaderSection>
        <NavList />
      </HeaderSection>
    </header>
  );
}

export default Header;
