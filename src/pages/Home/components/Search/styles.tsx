import styled from 'styled-components'

export const SearchContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h4 {
      font-weight: bold;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 160%;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      line-height: 160%;
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    margin-top: 0.75rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
