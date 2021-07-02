import {
  Container,
  HeaderContainer,
  HeaderContent,
  ContentContainer,
  Content,
  LogoBox,
  FormBox
} from "./styles";
import HomeImg from '../../assets/mentalImg.png';

import Input from '../Input';
import Button from '../Button'

export function SignUp() {
  return (
    <Container>

      <HeaderContainer>
        <HeaderContent>
          <LogoBox>
            <h3>Clínica Laboratório</h3>
            <h2>Bem estar</h2>
          </LogoBox>
        </HeaderContent>
      </HeaderContainer>

      <ContentContainer>
        <Content>
          <img src={HomeImg} alt="" />
          <FormBox>
            <form>
              <h1>Seus dados</h1>

              <Input name="contact" placeholder="Número ou e-mail" />
              <Input name="full-name" placeholder="Nome completo" />
              <Input name="birth" placeholder="Data de nascimento" />

              <Button type="submit">Entrar</Button>

            </form>
          </FormBox>
        </Content>
      </ContentContainer>
    </Container>
  )
}