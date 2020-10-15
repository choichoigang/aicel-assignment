import styled from "styled-components";

const Button = styled.button<{ fillColor: string; textColor: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  height: 2.25rem;

  transition: 0.3s;

  background-color: ${(props) => props.fillColor};
  color: ${(props) => props.textColor};

  :hover {
    opacity: 0.7;
  }
`;

export default Button;
