import styled from "styled-components";

const Section = styled.section`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 1024px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default Section;
