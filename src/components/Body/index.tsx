// import { useContext } from 'react';
import WhatsappLogo from '../../assets/whatsapp.svg';
// import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import HomeImg from '../../assets/mentalImg.png';
import {
  Container,
  Content,
  TextBox,
  Title,
  Subtitle,
  ButtonBox,
  CallButton,
  ImageBox,
  ContainerBox,
  HeaderBox
} from './styles';
import { Footer } from '../Footer';
import { Header } from '../Header';

export function Body() {
  // const auth = useContext(AuthContext);

  return (
    <ContainerBox>
      <HeaderBox>
        <Header />
      </HeaderBox>
      <Container>
        <Content>
          <TextBox>
            <Title>
              Um passo para melhorar sua saúde.
          </Title>
            <Subtitle>
              Fornecemos novos métodos de psicoterapia e serviços
              para indivíduos, casais e famílias
          </Subtitle>
            <ButtonBox>
              <Link to="/appointment">
                <button type="button">Agendar consulta</button>
              </Link>
              <CallButton>
                <ImageBox>
                  <img src={WhatsappLogo} alt="" />
                </ImageBox>
                <button type="button">
                  <h4>Ligue agora</h4>
                (79) 99880099
              </button>
              </CallButton>
            </ButtonBox>
          </TextBox>
          <img src={HomeImg} alt="" />
        </Content>
        <Footer />
      </Container>
    </ContainerBox>
  )
}