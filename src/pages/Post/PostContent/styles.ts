import styled from 'styled-components'

export const ContentContainer = styled.div`
  max-width: 58rem;
  padding: 2.5rem 4rem;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
    padding-bottom: 1rem;
    padding-top: 2rem;
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background-color: ${(props) => props.theme['base-post']};
    padding: 1rem;

    > div {
      background-color: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
  }
`
