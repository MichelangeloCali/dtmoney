import { Summary } from '../Summary/Summary'
import { TransactionsTable } from '../TransactionsTable/TransactionsTable'
import { Container } from './Dashboard.styles'

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}
