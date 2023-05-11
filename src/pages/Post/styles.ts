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

export const ContentContainer = styled.div`
  max-width: 58rem;
  padding: 2.5rem 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
  }
`
