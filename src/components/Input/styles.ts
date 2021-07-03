import styled, { css } from 'styled-components';

interface IContainerProps {
  isErroed: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${(props) =>
    props.isErroed &&
    css`
        color: var(--error);
      `
  }

  display: flex;
  align-items: center;
  background-color: var(--yellow);
  border-radius: 10px;
  border: 2px solid;
  border-color: var(--orange-light);
  padding: 1rem;
  width: 19rem;

  // a partir da segunda div
  & + div {
      margin-top: 0.5rem;
    }

  input {
    flex: 1;
    border: 0;
    background-color: transparent;
    color: var(--text-black);
    height: 2rem;

    &::placeholder {
      color: var(--text-light);
      font-size: 1rem;
    }

    
  
  }
`;