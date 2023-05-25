import styled from 'styled-components'

export const CardTitleContainer = styled.div`
  width: 100%;
  min-height: 10.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2.5rem 2rem;

  margin-top: -7.125rem;

  header {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.1rem;
    }
  }

  button {
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const PostTitle = styled.h2`
  margin-top: 1.25rem;
  color: ${(props) => props.theme['base-title']};
`
export const LabelsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;

  @media (max-width: 628px) {
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.5rem;
  }
`

export const LabelContainer = styled.div`
  display: flex;

  img {
    width: 1.125rem;
    margin-right: 0.5rem;
  }

  img,
  p {
    color: ${(props) => props.theme['base-span']};
  }
`
