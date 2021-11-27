import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 10px;
  left: 60px;
  width: calc(100% - 60px);
`;

export const Container = styled.div`
  @media only screen and (max-width: 480px) {
    margin: 0;
    width: 100%;
  }
`;
