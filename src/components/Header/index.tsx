import { Container, Content, LogoBox, HeaderBox } from "./styles";

export function Header() {
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
        <button type="button">
          Entrar
        </button>
      </Content>
    </Container>
  )
}