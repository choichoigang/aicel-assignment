import styled from "styled-components";
import Section from "../../styles/Section";

interface IGridTableWrapper {
  isName: boolean;
  isAge: boolean;
  isWeight: boolean;
}

export const SectionWrapper = styled(Section)`
  margin-top: 6rem;

  input {
    width: 30rem;
    margin-bottom: 1.2rem;
    padding: 0.4rem;
  }
`;

export const GridTableWrapper = styled.table<IGridTableWrapper>`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: bold;

  .header-table {
    background-color: ${({ theme: { colors } }) => colors.green};

    .triangle {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
    }

    .name {
      border-top: ${(props) => {
        return !props.isName && "6px solid white";
      }};
      border-bottom: ${(props) => {
        return props.isName && "6px solid white";
      }};
    }

    .age {
      border-top: ${(props) => {
        return !props.isAge && "6px solid white";
      }};
      border-bottom: ${(props) => {
        return props.isAge && "6px solid white";
      }};
    }

    .weight {
      border-top: ${(props) => {
        return !props.isWeight && "6px solid white";
      }};
      border-bottom: ${(props) => {
        return props.isWeight && "6px solid white";
      }};
    }

    th {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      margin-right: 0.4rem;
    }
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  th {
    border: 1px solid #fff;
    padding: 1rem;
  }
`;

export const TableCardWrapper = styled.tr``;
