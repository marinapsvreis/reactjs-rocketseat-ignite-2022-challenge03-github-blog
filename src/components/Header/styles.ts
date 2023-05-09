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
  height: 296px;
  background-image: url(${coverImg});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    justify-content: center;
    padding-top: 64px;

    width: 100%;
    height: 100%;

    img {
      width: 148px;
      height: 64px;
    }
  }
`
