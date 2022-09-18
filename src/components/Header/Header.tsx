import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export const Header = () => {
  return (
    <div>
      <Container>
        <Content>
          <img src={logoimg} alt="dt money" />
          <button type="button">
            Nova tansação
          </button>
        </Content>
      </Container>
    </div>
  )
}