import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../context/AuthContext';
import Modal from 'react-modal';
import { Container, Content, LogoBox, HeaderBox, WelcomeBox, RightContent } from "./styles";
import { api } from '../../services/api';
import { SignUpModal } from '../SignUpModal';

Modal.setAppElement('#root');

interface UserProps {
  id: number;
  name: string;
  contact: string;
  plan: string;
}

export function Header() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  function handleOpenNewSignUpModal() {
    setIsSignUpModalOpen(true);
  }

  function handleCloseNewSignUpModal() {
    setIsSignUpModalOpen(false);
  }

  useEffect(() => {
    api.get('users')
      .then(response => setUsers(response.data.users))
  }, []);

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