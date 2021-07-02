import styled from 'styled-components';

export const Container = styled.header`
`;

export const HeaderContainer = styled.div`
  background: var(--background);
`;

export const HeaderContent = styled.div`
  margin: 0 auto;

  padding: 1rem 1rem 35rem;
  display: flex;
  justify-content: flex-end;

  button {
    font-size: 1rem;
    color: var(--text-black);
    background-color: var(--yellow-medium);
    border: 0;
    padding: 0 2rem;
    border-radius: 8px;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: default;
  }
  h3{
    color: var(--text-black);
  }
  h2{
    font-family: yellowtail;
    color: var(--logo);
    font-size: 2rem;
  }
`;

export const ContentContainer = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1rem;
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  margin-top: -33rem;

  img {
    margin: 0 auto;
    width: 35rem;
    height: 37.5rem;
  }
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 43.75rem;

  form {
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
    width: 21.25rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
`;