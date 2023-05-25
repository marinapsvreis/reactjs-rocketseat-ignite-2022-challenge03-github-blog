import styled from 'styled-components'

export const PostContainer = styled.div`
  margin-top: 18.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    p {
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;
      color: ${(props) => props.theme.blue};
    }

    svg {
      color: ${(props) => props.theme.blue};
    }
  }
`
