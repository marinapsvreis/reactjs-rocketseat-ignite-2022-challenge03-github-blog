import logoImg from '../../assets/logo.svg'
import { CoverBackground, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <CoverBackground>
        <div>
          <img src={logoImg} alt="Github Blog" />
        </div>
      </CoverBackground>
    </HeaderContainer>
  )
}
