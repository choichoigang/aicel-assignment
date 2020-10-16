import styled, { css } from "styled-components";

const Button = styled.button<{
  size: string;
  fillColor: string;
  textColor: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  background-color: ${(props) => props.fillColor};
  color: ${(props) => props.textColor};

  ${(props) =>
    props.size === "small" &&
    css`
      height: 2.4rem;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 3.6rem;
      font-size: 1.8rem;
      padding-left: 1.6rem;
      padding-right: 1.6rem;
    `}

  :hover {
    opacity: 0.7;
  }
`;

export default Button;
