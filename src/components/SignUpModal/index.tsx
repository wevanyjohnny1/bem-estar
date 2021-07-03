import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { RiMentalHealthLine } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';
import { Container, UserTypeContainer, TypeBox } from './styles';
import { UsersContext } from '../../context/UsersContext';

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
          <input
            placeholder="Plano de saúde"
            value={plan}
            onChange={event => setPlan(event.target.value)}
          />
        }
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}