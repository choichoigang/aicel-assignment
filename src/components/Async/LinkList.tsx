import React from "react";
import { Link } from "react-router-dom";
import { LinkListWrapper } from "./Async.element";

function LinkList() {
  return (
    <LinkListWrapper>
      <li>
        <Link to="/async?city=Toronto">TORONTO</Link>
      </li>
      <li>
        <Link to="/async?city=Tokyo">TOKYO</Link>
      </li>
      <li>
        <Link to="/async?city=Seoul">SEOUL</Link>
      </li>
      <li>
        <Link to="/async?city=Beijing">BEIJING</Link>
      </li>
    </LinkListWrapper>
  );
}

export default LinkList;
