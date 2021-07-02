import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: -1rem;
`;

export const Content = styled.div`
  padding: 1.5rem 2rem;
  opacity: 0.7;
`;

export const Image = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

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