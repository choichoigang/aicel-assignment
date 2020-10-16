import styled from "styled-components";
import Section from "../../styles/Section";

export const HeaderSection = styled(Section)`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  font-weight: bold;
`;

export const NavListWrapper = styled.li`
  display: flex;
  justify-content: space-between;

  a {
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px;
    position: relative;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
`;
