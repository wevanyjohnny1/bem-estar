import styled from 'styled-components';

export const Container = styled.button`
    background-color: var(--yellow-medium);
    border-radius: 10px;
    padding: 0 1rem;
    height: 3.5rem;
    width: 19rem;
    margin-top: 1rem;
    font-size: 1.3rem;
    opacity: 0.7;

    font-weight: bold;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
`;