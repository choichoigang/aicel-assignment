import styled from "styled-components";
import Section from "../../styles/Section";

export const AsyncWrapper = styled(Section)`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .search-area {
    width: 100%;
  }

  input {
    width: 100%;
    margin-top: 2.4rem;
    border-radius: 0.4rem;
    border: 0.1rem solid ${({ theme: { colors } }) => colors.gray};
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
    padding: 1.2rem 0.4rem;
  }
`;

export const AsyncContent = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .error-log {
    font-size: 2.4rem;
    font-weight: bold;
  }

  .city-info {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 3rem;
    img {
      height: auto;
      width: 250px;
    }
  }
`;

export const LinkListWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  li {
    height: 3.6rem;
    background-color: ${({ theme: { colors } }) => colors.blue};
    color: ${({ theme: { colors } }) => colors.white};
    border-radius: 0.4rem;
    transition: 0.3s;
    margin: 0 0.6rem;

    :hover {
      opacity: 0.7;
    }
  }

  a {
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0 2.4rem;
  }
`;
