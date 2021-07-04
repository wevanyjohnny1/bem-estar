import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { FiX } from 'react-icons/fi';
import { RiMentalHealthLine } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';

import { UsersContext } from '../../context/UsersContext';

import { Container, UserTypeContainer, TypeBox, FormBox, AnimationContainer } from './styles';

interface ISignUpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SignUpModal({ isOpen, onRequestClose }: ISignUpModalProps) {
  const { createUser } = useContext(UsersContext);

  const [isPrivateActive, setPrivateIsActive] = useState(false);
  const [isPlanActive, setIsPlanActive] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [plan, setPlan] = useState('');

  function handleIsPrivateActive() {
    setPrivateIsActive(!isPrivateActive);
    setIsPlanActive(false);
    setPlan('no')
  }

  function handleIsPlanActive() {
    setIsPlanActive(!isPlanActive);
    setPlan('')
    setPrivateIsActive(false);
  }

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    await createUser({
      name,
      contact,
      plan
    })

    setName('')
    setContact('')
    setPlan('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <FiX />
      </button>
      <AnimationContainer>
        <Container onSubmit={handleCreateUser}>
          <h2>Cadastrar meus dados</h2>
          <input
            placeholder="Nome completo"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            placeholder="E-mail ou whatsapp"
            value={contact}
            onChange={event => setContact(event.target.value)}
          />

          <UserTypeContainer>
            <TypeBox
              type="button"
              onClick={handleIsPrivateActive}
              isActive={isPrivateActive}
            >
              <RiMentalHealthLine className="button-img" />
              <span>Sou paciente particular</span>
            </TypeBox>

            <TypeBox
              type="button"
              onClick={handleIsPlanActive}
              isActive={isPlanActive}
            >
              <GiHealthNormal className="button-img" />
              <span>Tenho plano de saúde</span>
            </TypeBox>
          </UserTypeContainer>
          {
            isPlanActive &&
            <FormBox>
              <select onChange={event => setPlan(event.target.value)}>
                <option value="hapvida">Hapvida</option>
                <option value="unimed">Unimed</option>
              </select>
            </FormBox>
          }
          <button type="submit">
            Cadastrar
        </button>
        </Container>
      </AnimationContainer>
    </Modal>
  )
}