import WhatsappLogo from '../../assets/whatsapp.svg';
import HomeImg from '../../assets/mentalImg.png';
import {
  Container,
  Content,
  TextBox,
  Title,
  Subtitle,
  ButtonBox,
  CallButton,
  ImageBox
} from './styles';

export function Body() {
  return (
    <Container>
      <Content>
        <TextBox>
          <Title>
            Um passo para melhorar sua saúde.
          </Title>
          <Subtitle>
            Fornecemos novos métodos de psicoterapia e serviços
            psiquiátricos excepcionais, eficazes e gratificantes
            para indivíduos, casais e famílias
          </Subtitle>
          <ButtonBox>
            <button type="button">Agendar consulta</button>
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
    </Container>
  )
}