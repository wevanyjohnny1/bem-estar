import styled, { keyframes } from 'styled-components';

const travelOne = keyframes`
  from {
    transform: translateX(-90px);
  } to {
    transform: translateX(100%);
  }
`;

const travelTwo = keyframes`
  from {
    transform: translateX(-70px);
    opacity: 1;
  } to {
    transform: translateX(1700px);
    opacity: 0;
  }
`;

const travelThree = keyframes`
  from {
    transform: translateX(-70px);
    opacity: 1;
  } to {
    transform: translateX(1700px);
    opacity: 0;
`;

const travelFour = keyframes`
  from {
    transform: translateX(1700px);
    opacity: 1;
  } to {
    transform: translateX(-70px);
    opacity: 0;
`;

const travelFive = keyframes`
  from {
    transform: translateX(1800px);
    opacity: 1;
  } to {
    transform: translateX(-70px);
    opacity: 0;
  }
`;

const travelSix = keyframes`
  from {
    transform: translateX(1800px);
    opacity: 1;
  } to {
    transform: translateX(-70px);
    opacity: 0;
`;

export const Container = styled.header`
  background: var(--background);

    .cloudOne {
    position: absolute;
    height: 2rem;
    width: 2rem;
    margin: 5rem 5rem;

    color: var(--cloud);

    animation: ${travelOne} 20s linear infinite;
    }

    .cloudTwo {
    position: absolute;
    height: 7rem;
    width: 7rem;
    margin: 4rem 4rem;

    color: var(--cloud);

    animation: ${travelTwo} 25s linear infinite;
    }

    .cloudThree {
    position: absolute;
    height: 2rem;
    width: 2rem;
    margin: 4rem 4rem;

    color: var(--cloud);

    animation: ${travelThree} 30s linear infinite;
  }

  .cloudFour {
    position: absolute;
    height: 7rem;
    width: 7rem;
    margin: 4rem 4rem;

    color: var(--cloud);

    animation: ${travelFour} 25s linear infinite;
  }

  .cloudFive {
    position: absolute;
    height: 2rem;
    width: 2rem;
    margin: 4rem 4rem;

    color: var(--cloud);

    animation: ${travelFive} 20s linear infinite;
  }

  .cloudSix {
    position: absolute;
    height: 2rem;
    width: 2rem;
    margin: 4rem 4rem;

    color: var(--cloud);

    animation: ${travelSix} 30s linear infinite;
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

export const HeaderBox = styled.div`
  margin: 1rem;
  width: 26.9rem;

  a {
    text-decoration: none;
    padding: 1rem;
    color: inherit;
    text-align: center;
    margin: auto;
  }

  a:link {
  text-decoration: none;
  }

  a:hover{
    cursor: pointer;
  }

  a:visited {
    text-decoration: none;
  }
  
  a:active{
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  margin: 0 auto;

  padding: 1rem 1rem 35rem;
  display: flex;
  justify-content: space-between;

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

export const WelcomeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RightContent = styled.div``;