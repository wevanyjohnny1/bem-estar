import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: var(--background);
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const FormContainer = styled.form`
  padding: 2.5rem 1rem;
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  
  animation: ${appearFromTop} 1s;

  p {
    color: var(--text-light);
    margin: 0.5rem 0;
  }

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
    margin: 0.5rem 0;
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

export const UserTypeContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface ITypeBoxProps {
  isActive: boolean;
}

export const TypeBox = styled.button<ITypeBoxProps>`
    margin-right: 20px;
    height: 4rem;
    width: 15rem;
    border: 1px solid var(--yellow-medium);
    border-radius: 0.25rem;

    animation: ${appear} 3s;

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

export const CardBox = styled.div``;

export const BoxOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const BoxTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;
export const BoxTree = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const PixBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  .pix {
    font-size: 2rem;
    color: var(--text-light)
  }
`;

export const PaymentBox = styled.div``;

export const PlanCode = styled.div``;

export const PaymentCheck = styled.div``;

export const PaymentType = styled.div``;

export const TypeContainer = styled.div``;

export const DateHourPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const Date = styled.div``;

export const Hour = styled.div`
`;

export const Price = styled.div`
  margin-left: 1rem;

  .price-box {
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem !important;
  }
`;