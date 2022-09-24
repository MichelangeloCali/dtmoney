import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal : () => void
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {
  return (
    <div>
      <Container>
        <Content>
          <img src={logoimg} alt="dt money" />
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova tansação
          </button>
        </Content>
      </Container>
    </div>
  )
}