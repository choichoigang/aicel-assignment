import styled from "styled-components";
import Section from "../../styles/Section";

interface ICounterWrapper {
  isMax: boolean;
  isMin: boolean;
}

export const CounterWrapper = styled(Section)<ICounterWrapper>`
  margin-top: 6rem;
  font-size: 2.4rem;

  display: flex;
  align-items: center;

  .count {
    display: block;
    width: 4rem;
    text-align: center;
  }

  button {
    height: 3.6rem;
    width: 3.6rem;
    font-size: inherit;
    text-align: center;
    background-color: ${({ theme: { colors } }) => colors.green};
    color: ${({ theme: { colors } }) => colors.white};
    border-radius: 0.4rem;
  }

  .increase-btn {
    opacity: ${(props) => props.isMin && "0.7"};
  }

  .decrease-btn {
    opacity: ${(props) => props.isMax && "0.7"};
  }
`;
