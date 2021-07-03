import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Container, Content, LogoBox, HeaderBox } from "./styles";
import { api } from '../../services/api';

export function Header() {
  useEffect(() => {
    api.get('signup')
      .then(response => console.log(response.data))
  }, []);

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
        <Link to="/signup">
          <button type="button">
            Entrar
        </button>
        </Link>
      </Content>
    </Container>
  )
}