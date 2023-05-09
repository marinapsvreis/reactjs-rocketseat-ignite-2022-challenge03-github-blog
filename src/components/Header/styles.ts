import styled from 'styled-components'
import coverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const CoverBackground = styled.div`
  width: 100vw;
  height: 18.5rem;
  background-image: url(${coverImg});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    justify-content: center;
    padding-top: 4rem;

    width: 100%;
    height: 100%;

    img {
      width: 9.25rem;
      height: 4rem;
    }
  }
`
