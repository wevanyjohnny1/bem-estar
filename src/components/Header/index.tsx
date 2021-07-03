import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { Container, Content, LogoBox, HeaderBox, WelcomeBox, RightContent } from "./styles";
import { SignUpModal } from '../SignUpModal';
import { UsersContext } from '../../context/UsersContext';

Modal.setAppElement('#root');

export function Header() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const { users } = useContext(UsersContext);

  function handleOpenNewSignUpModal() {
    setIsSignUpModalOpen(true);
  }

  function handleCloseNewSignUpModal() {
    setIsSignUpModalOpen(false);
  }

  const userName = users.map(({ name }) => name)[0]

  return (
    <Container>
      <Content>
        <LogoBox>
          <h3>Clínica Laboratório</h3>
          <h2>Bem estar</h2>
        </LogoBox>

        <HeaderBox>
          <a href="a">Página Principal</a>
          <a href="b">Planos parceiros</a>
          <a href="c">Nossa equipe</a>
        </HeaderBox>

        <RightContent>
          {userName ?
            <WelcomeBox>
              <h4>bem vindo,</h4>
              <h4>{userName}!</h4>
            </WelcomeBox>
            :
            <button type="button" onClick={handleOpenNewSignUpModal}>
              Entrar
            </button>
          }
        </RightContent>

        <SignUpModal
          isOpen={isSignUpModalOpen}
          onRequestClose={handleCloseNewSignUpModal}
        />
      </Content>
    </Container>
  )
}