import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  width: 100%;
  max-width: 26rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  text-decoration: none;

  header {
    display: flex;
    justify-content: space-between;

    h4 {
      max-width: 17.68rem;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    p {
      color: ${(props) => props.theme['base-title']};
      white-space: nowrap;
    }
  }

  .description {
    margin-top: 1.25rem;
    text-overflow: ellipsis;
    height: 7rem;
    overflow: hidden;
    color: ${(props) => props.theme['base-title']};
  }

  @media (max-width: 928px) {
    max-width: 100%;
  }
`
