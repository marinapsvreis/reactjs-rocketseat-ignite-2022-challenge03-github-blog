import styled from 'styled-components'
import coverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
`

export const CoverBackground = styled.div`
  height: 18.5rem;
  width: 100%;
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
      height: 6.125rem;
    }
  }
`
