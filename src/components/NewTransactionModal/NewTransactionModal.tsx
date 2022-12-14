import Modal from 'react-modal'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [typeTransaction, setTypeTransaction] = useState('deposit')

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault()
    const data = {
      title,
      value,
      category,
      typeTransaction,
    };

    api.post('/transactions', data)
  } 

  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder="Titulo" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => { setTypeTransaction('deposit') }}
            isActive={typeTransaction === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => { setTypeTransaction('withdraw') }}
            isActive={typeTransaction === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
  </Modal>
  )
}
