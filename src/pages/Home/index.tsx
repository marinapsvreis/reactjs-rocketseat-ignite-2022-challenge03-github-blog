import githubIcon from '@/assets/github.svg'
import { api } from '@/lib/axios'
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

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

interface GithubProfile {
  name: string
  bio: string
  followers: number
}

export interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  // const [query, setQuery] = useState('')

  const [profile, setProfile] = useState<GithubProfile>({
    name: '',
    bio: '',
    followers: 0,
  })

  async function getInfoProfile() {
    try {
      const response = await api.get(`/users/${userName}`)

      setProfile(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  async function getPosts(query: string = '') {
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
      )

      setPosts(response.data.items)
    } finally {
      console.log('TESTE')
    }
  }

  useEffect(() => {
    getInfoProfile()
    getPosts()
  }, [posts])

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
          <p>{posts.length || 0} publicações</p>
        </header>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>
      <CardsContainer>
        {posts.length > 0 ? (
          posts.map((post) => {
            return <Card key={post.number} post={post} />
          })
        ) : (
          <p>Não tem nenhum post</p>
        )}
      </CardsContainer>
    </HomeContainer>
  )
}
