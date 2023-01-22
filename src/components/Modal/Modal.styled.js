// перевірити овірлей
import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalForm = styled.div`
  /* max-width: calc(100% - 48px);
  max-height: calc(100% - 24px); */
  background-color: white;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 300px;
  transform: translate(-50%, -50%);
  padding: 12px;
  position: absolute;
`;
