import AppointmentSvg from '../../assets/appointment.svg';
import CameraSvg from '../../assets/camera.svg';
import CheckSvg from '../../assets/check.svg';

import {
  Container,
  Content,
  Image,
  Title,
  Subtitle
} from './styles';

export function FooterBox() {
  return (
    <Container>

      <Content>
        <Image>
          <img src={AppointmentSvg} alt="" />
        </Image>
        <Title>
          Fácil de agendar
        </Title>
        <Subtitle>
          Com a Bem Estar é muito fácil de agendar. Ao completar
          alguns passos, você pode começar seu tratamento
        </Subtitle>
      </Content>

      <Content>
        <Image>
          <img src={CameraSvg} alt="" />
        </Image>
        <Title>
          Tratamento online
        </Title>
        <Subtitle>
          Com a Bem Estar você também pode receber tratamento de forma
          online por videochamada ou por chamada de áudio
        </Subtitle>
      </Content>

      <Content>
        <Image>
          <img src={CheckSvg} alt="" />
        </Image>
        <Title>
          Metodologias modernas
        </Title>
        <Subtitle>
          Nossos profissionais aplicam metodologias rápidas e eficazes
          para você se sentir melhor novamente
        </Subtitle>
      </Content>

    </Container>
  )
}