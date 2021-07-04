import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  padding: 2.5rem 1rem;
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  margin-top: -33rem;
`;

const appear = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin: 0 auto;
    width: 35rem;
    height: 37.5rem;

    animation: ${appear} 3s;
  }
`;

export const TextBox = styled.div`
`;

export const Title = styled.h1`
  font-family: 'Roboto-condensed', sans-serif;
  font-weight: 400;
  font-size: 4.3rem;
  color: var(--text-black);
  text-align: left;
`;

export const Subtitle = styled.h4`
  margin: 2rem 4rem;
  text-align: justify;
  color: var(--text-black);
  opacity: 0.7;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 30px;
`;

export const ButtonBox = styled.div`
  margin: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 0.7fr 1fr;
  gap: 1rem;

  button {
    font-size: 1rem;
    height: 3rem;
    width: 10rem;
    color: var(--text-black);
    background-color: var(--yellow-medium);
    border: 0;
    border-radius: 8px;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
  }
`;

export const ImageBox = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: var(--shape);
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: -14px;

  img {
    height: 2rem;
    color: var(--orange-light);
  }
`;

export const CallButton = styled.div`
  display: flex;
  align-items: center;

  
  button {
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    opacity: 0.7;
  }
`;

export const ContainerBox = styled.div``;

export const HeaderBox = styled.div``;