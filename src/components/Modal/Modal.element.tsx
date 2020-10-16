import styled from "styled-components";
import Section from "../../styles/Section";

export const ModalWrapper = styled(Section)`
  display: flex;
  margin-top: 60px;
`;

export const DemoModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  .content {
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: white;
    padding: 1rem;
    width: 300px;
    height: auto;
    border-radius: 0.8rem;
    line-height: 3rem;
  }
`;
