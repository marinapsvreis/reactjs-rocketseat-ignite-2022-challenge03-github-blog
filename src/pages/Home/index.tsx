import githubIcon from '@/assets/github.svg'
import { ArrowSquareOut } from 'phosphor-react'
import { useEffect, useState } from 'react'
import buildingIcon from '../../assets/building.svg'
import followersIcon from '../../assets/followers.svg'
import { Card } from './components/Card'
import {
  CardsContainer,
  HomeContainer,
  InfoContainer,
  LabelContainer,
  LabelsContainer,
  ProfileContainer,
  ProfileName,
  ProfileText,
  SearchContainer,
} from './styles'

interface GithubProfile {
  name: string
  bio: string
  followers: number
}

export interface Issue {
  id: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [profile, setProfile] = useState<GithubProfile>({
    name: '',
    bio: '',
    followers: 0,
  })

  const [issues, setIssues] = useState<Issue[]>([])

  async function getInfoProfile() {
    await fetch('https://api.github.com/users/marinapsvreis')
      .then((response) => response.json())
      .then((data) => {
        setProfile({
          name: data.name,
          bio: data.bio,
          followers: data.followers,
        })
      })
      .catch((error) => console.log(error))
  }

  async function getIssuesFromRepository() {
    await fetch(
      'https://api.github.com/search/issues?q=%20repo:marinapsvreis/rocketseat-ignite-reactjs-trilhanova-desafio03-github-blog',
    )
      .then((response) => response.json())
      .then((data) => {
        setIssues(data.items)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getInfoProfile()
    getIssuesFromRepository()
  }, [])

  return (
    <HomeContainer>
      <ProfileContainer>
        <img src="https://github.com/marinapsvreis.png" alt="" />
        <ProfileText>
          <header>
            <ProfileName>{profile.name}</ProfileName>
            <a href="https://github.com/marinapsvreis">
              <p>GITHUB </p>
              <ArrowSquareOut size={18} />
            </a>
          </header>
          <InfoContainer>
            <p>{profile.bio}</p>
            <LabelsContainer>
              <LabelContainer>
                <img src={githubIcon} alt="" />
                <p>marinapsvreis</p>
              </LabelContainer>
              <LabelContainer>
                <img src={buildingIcon} alt="" />
                <p>Rocketseat</p>
              </LabelContainer>
              <LabelContainer>
                <img src={followersIcon} alt="" />
                <p>{profile.followers} seguidores</p>
              </LabelContainer>
            </LabelsContainer>
          </InfoContainer>
        </ProfileText>
      </ProfileContainer>
      <SearchContainer>
        <header>
          <h4>Publicações</h4>
          <p>6 publicações</p>
        </header>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>
      <CardsContainer>
        {issues.map((issue) => {
          return <Card key={issue.id} issue={issue} />
        })}

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </CardsContainer>
    </HomeContainer>
  )
}
