import React from "react";
import { Link } from "react-router-dom";

import { NavListWrapper } from "./Header.element";

function NavList() {
  return (
    <NavListWrapper>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
      <li>
        <Link to="/grid">Grid</Link>
      </li>
      <li>
        <Link to="/modal">Modal</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/async">Async</Link>
      </li>
    </NavListWrapper>
  );
}

export default NavList;
