import { LogoIcon } from '../../assets'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <LogoIcon />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
