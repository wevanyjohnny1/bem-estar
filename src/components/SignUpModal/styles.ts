import styled, { keyframes } from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-light);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--yellow-medium);
    background: var(--yellow);

    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--logo);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromTop} 1s;
`;

export const UserTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem; 
`;

export const FormBox = styled.div`
  select {
  background-color: var(--orange-light);
  color: var(--text-light);
  padding: 12px;
  width: 100%;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  }
`;

interface ITypeBoxProps {
  isActive: boolean;
}

export const TypeBox = styled.button<ITypeBoxProps>`
    height: 4rem;
    border: 1px solid var(--yellow-medium);
    border-radius: 0.25rem;

    background: ${(props) => props.isActive ? '#f8c894' : '#ece9de'};

    .button-img{
      width: 20px;
      height: 20px;
    }
    
    .selected {
      background: var(--logo);
    }
    span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-light);
  }
`;
