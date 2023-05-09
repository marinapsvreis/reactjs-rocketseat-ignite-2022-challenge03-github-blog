import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 296px;
  display: flex;
  justify-content: center;
`
export const ProfileContainer = styled.div`
  display: flex;
  gap: 32px;
  max-width: 864px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 40px 32px;

  margin-top: -11%;

  img {
    width: 148px;
    border-radius: 10px;
  }

  header {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      text-decoration: none;

      font-size: 12px;
      color: ${(props) => props.theme.blue};
    }
  }
`

export const ProfileName = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100% - 40px);
`

export const LabelsContainer = styled.div`
  display: flex;
  gap: 24px;
`

export const LabelContainer = styled.div`
  display: flex;

  img {
    width: 18px;
    margin-right: 8px;
  }
`
