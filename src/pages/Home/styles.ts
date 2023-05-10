import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 18.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  min-height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2.5rem 2rem;

  margin-top: -6.625rem;

  img {
    width: 9.25rem;
    border-radius: 10px;
  }

  header {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      justify-content: center;
      align-items: start;
      gap: 0.5rem;

      text-decoration: none;

      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};

      margin-top: 5px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -20%;

    img {
      width: 100%;
    }
  }
`

export const ProfileText = styled.div`
  flex: 1;
`

export const ProfileName = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 0.5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100% - 2.5rem);
`

export const LabelsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
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
`

export const SearchContainer = styled.div`
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
