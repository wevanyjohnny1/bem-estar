import { useCallback, useRef, useState, useEffect } from 'react';
import {
  Container,
  HeaderContainer,
  HeaderContent,
  ContentContainer,
  Content,
  LogoBox,
  FormBox
} from "./styles";
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import HomeImg from '../../assets/mentalImg.png';
import { FiArrowLeft } from 'react-icons/fi';

import Input from '../Input';
import Button from '../Button';

export function SignUp() {
  const [user, setUser] = useState([]);
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        contact: Yup.string().required('Obrigatório'),
        fullName: Yup.string().required('Obrigatório'),
        birth: Yup.string().required('Obrigatório')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, [])
  return (
    <Container>

      <HeaderContainer>
        <HeaderContent>
          <Link to="/">
            <FiArrowLeft />
            <button>
              Voltar
          </button>
          </Link>
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
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Seus dados</h1>

              <Input name="contact" placeholder="Número ou e-mail" />
              <Input name="fullName" placeholder="Nome completo" />
              <Input name="birth" placeholder="Data de nascimento" />

              <Button type="submit">Entrar</Button>

            </Form>
          </FormBox>
        </Content>
      </ContentContainer>
    </Container>
  )
}
