import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  min-height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2.5rem 2rem;

  margin-top: -7.125rem;

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

      p {
        font-weight: bold;
        margin-top: 0.11rem;
      }
    }
  }

  @media (max-width: 628px) {
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
`
