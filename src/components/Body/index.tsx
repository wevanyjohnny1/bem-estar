import WhatsappLogo from '../../assets/whatsapp.svg';
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
import { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';

export function Body() {
  const { users } = useContext(UsersContext);

  const userId = users.map(({ id }) => id)[0]

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
              {userId &&
                <Link to="/appointment">
                  <button type="button">Agendar consulta</button>
                </Link>
              }

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