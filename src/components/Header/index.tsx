import coverImg from '../../assets/cover.png'
import { CoverContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <CoverContainer src={coverImg} alt="" />
    </HeaderContainer>
  )
}
