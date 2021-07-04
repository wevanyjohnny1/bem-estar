import { useContext, useState } from 'react';
import Modal from 'react-modal';

import { BsCloud } from 'react-icons/bs';

import { SignUpModal } from '../SignUpModal';
import { UsersContext } from '../../context/UsersContext';

import { Container, Content, LogoBox, WelcomeBox, RightContent } from "./styles";

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
      <BsCloud className="cloudOne" />
      <Content>
        <LogoBox>
          <h3>Clínica Laboratório</h3>
          <h2>Bem estar</h2>
        </LogoBox>

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