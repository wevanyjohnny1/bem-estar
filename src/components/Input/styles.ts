import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--yellow);
  border-radius: 10px;
  border: 2px solid;
  border-color: var(--orange-light);
  padding: 1rem;
  width: 100%;

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