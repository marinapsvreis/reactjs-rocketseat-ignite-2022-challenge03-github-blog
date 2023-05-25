import githubIcon from '@/assets/github.svg'
import { api } from '@/lib/axios'
import { ArrowSquareOut } from 'phosphor-react'
import { useEffect, useState } from 'react'
import {
  InfoContainer,
  LabelContainer,
  LabelsContainer,
  ProfileContainer,
  ProfileName,
  ProfileText,
} from './styles'

import buildingIcon from '../../../../assets/building.svg'
import followersIcon from '../../../../assets/followers.svg'

const userName = import.meta.env.VITE_GITHUB_USERNAME

interface GithubProfile {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profile, setProfile] = useState<GithubProfile>({} as GithubProfile)
  // const [isLoading, setIsLoading] = useState(true)

  async function getProfile() {
    try {
      // setIsLoading(true)
      const response = await api.get(`/users/${userName}`)

      setProfile(response.data)
    } finally {
      // setIsLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="" />
      <ProfileText>
        <header>
          <ProfileName>{profile.name}</ProfileName>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            <p>GITHUB </p>
            <ArrowSquareOut size={18} />
          </a>
        </header>
        <InfoContainer>
          <p>{profile.bio}</p>
          <LabelsContainer>
            <LabelContainer>
              <img src={githubIcon} alt="" />
              <p>{profile.login}</p>
            </LabelContainer>
            {profile?.company && (
              <LabelContainer>
                <img src={buildingIcon} alt="" />
                <p>{profile.company}</p>
              </LabelContainer>
            )}
            <LabelContainer>
              <img src={followersIcon} alt="" />
              <p>{profile.followers} seguidores</p>
            </LabelContainer>
          </LabelsContainer>
        </InfoContainer>
      </ProfileText>
    </ProfileContainer>
  )
}
