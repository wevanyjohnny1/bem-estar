import styled, { keyframes } from 'styled-components';

const appearFromBottomOne = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: -1rem;

  animation: ${appearFromBottomOne} 3s;
`;

export const Content = styled.div`
  padding: 1.5rem 2rem;
  opacity: 0.7;
`;

export const Image = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  animation: ${appear} 7s;

  img {
    height: 1.5rem;
  }
`;

export const Title = styled.strong`
  display: flex;
  margin-top: 2rem;
  font-size: 1.2rem;
  opacity: 0.7;
  justify-content: center;
  text-align: center;
`;

export const Subtitle = styled.strong`
  display: flex;
  text-align: center;
  margin-top: 0.8rem;
  font-size: 1rem;
  font-weight: normal;
`;