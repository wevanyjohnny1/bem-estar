import { useContext, useState } from "react";
import { Link } from 'react-router-dom';

import { BsCameraVideoFill } from "react-icons/bs";
import { FaHospitalAlt } from "react-icons/fa";
import { AiFillCreditCard, AiFillBank } from "react-icons/ai";

import { UsersContext } from "../../context/UsersContext";

import {
  Container,
  FormContainer,
  TypeBox,
  CardBox,
  BoxOne,
  BoxTwo,
  BoxTree,
  PixBox,
  PaymentBox,
  PlanCode,
  PaymentCheck,
  PaymentType,
  TypeContainer,
  DateHourPrice,
  Date,
  Hour,
  Price
} from "./styles";

export function Appointment() {
  const [isOnlineActive, setOnlineIsActive] = useState(false);
  const [isPresActive, setIsPresActive] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [isPix, setIsPix] = useState(false);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const { users } = useContext(UsersContext);
  const userPlan = users.map(({ plan }) => plan)[0]

  console.log(users);

  function handleIsOnlineActive() {
    setOnlineIsActive(!isOnlineActive);
    setPrice(50);
    setIsPresActive(false);
  }

  function handleIsPresActive() {
    setIsPresActive(!isPresActive);
    setPrice(100);
    setOnlineIsActive(false);
  }

  function handleIsCard() {
    setIsCard(!isCard);
    setIsPix(false);
  }

  function handleIsPix() {
    setIsPix(!isPix);
    setIsCard(false);
  }

  function show_alert() {
    alert(`Consulta marcada para o dia ${date} às ${hour}`)
  }

  return (
    <Container>
      <FormContainer>
        <h2>Agendar consulta</h2>
        <p>Tipo da consulta</p>
        <TypeBox
          type="button"
          onClick={handleIsOnlineActive}
          isActive={isOnlineActive}
        >
          <BsCameraVideoFill className="button-img" />
          <span>Consulta online</span>
        </TypeBox>

        <TypeBox
          type="button"
          onClick={handleIsPresActive}
          isActive={isPresActive}
        >
          <FaHospitalAlt className="button-img" />
          <span>Consulta presencial</span>
        </TypeBox>
        <p>CPF do paciente</p>
        <input
          type="text"
          placeholder="CPF"
          required
        />
        <p>Motivo da consulta</p>
        <input
          placeholder="Motivo da consulta"
        />
        <DateHourPrice>
          <Date>
            <p>Data da consulta</p>
            <input
              type="date"
              placeholder="Data"
              value={date}
              onChange={event => setDate(event.target.value)}
              required
            />
          </Date>
          <Hour>
            <p>Horário da consulta</p>
            <input
              type="time"
              placeholder="Horário"
              value={hour}
              onChange={event => setHour(event.target.value)}
              required
            />
          </Hour>
          {userPlan === 'no' &&
            <Price>
              <p>Valor da consulta:</p>
              <p className="price-box">R$ {price},00</p>
            </Price>
          }
        </DateHourPrice>
        <PaymentCheck>
          {userPlan === 'no' ?
            <PaymentBox>
              <p>Forma de pagamento</p>
              <TypeContainer>
                <TypeBox
                  type="button"
                  onClick={handleIsCard}
                  isActive={isCard}
                >
                  <AiFillCreditCard className="button-img" />
                  <span>Cartão</span>
                </TypeBox>

                <TypeBox
                  type="button"
                  onClick={handleIsPix}
                  isActive={isPix}
                >
                  <AiFillBank className="button-img" />
                  <span>PIX</span>
                </TypeBox>
              </TypeContainer>

              <PaymentType>
                {isCard ?
                  <CardBox>
                    <BoxOne>
                      <input
                        placeholder="Número do cartão"
                        required
                      />
                      <input
                        placeholder="Código de segurança"
                        required
                      />
                    </BoxOne>

                    <BoxTwo>
                      <input
                        placeholder="Nome (escrito no cartão)"
                        required
                      />

                      <input
                        placeholder="Validade"
                        required
                      />

                    </BoxTwo>
                    <BoxTree>
                      <input
                        placeholder="CPF/CNPJ Do proprietário do cartão"
                        required
                      />

                      <input
                        type="date"
                        placeholder="Data de nascimento"
                        required
                      />
                    </BoxTree>
                  </CardBox>
                  :
                  <PixBox>
                    <span className="pix">Nosso PIX: bemestar@bemestarclinica.com.br</span>
                  </PixBox>
                }
              </PaymentType>
            </PaymentBox>
            :
            <PlanCode>
              <input
                placeholder="Número da carteira do plano"
                required
              />
            </PlanCode>
          }
        </PaymentCheck>
        <Link to="/">
          <button type="submit" onClick={show_alert}>
            Agendar
          </button>
        </Link>
      </FormContainer>
    </Container>
  )
}
