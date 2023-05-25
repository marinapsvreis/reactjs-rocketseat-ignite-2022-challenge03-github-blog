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
  name: string
  bio: string
  followers: number
}

export function Profile() {
  // const [isLoading, setIsLoading] = useState(true)
  const [profile, setProfile] = useState<GithubProfile>({
    name: '',
    bio: '',
    followers: 0,
  })

  async function getInfoProfile() {
    try {
      // setIsLoading(true)
      const response = await api.get(`/users/${userName}`)

      setProfile(response.data)
    } catch (err) {
      console.log(err)
    } finally {
      // setIsLoading(false)
    }
  }

  useEffect(() => {
    getInfoProfile()
  }, [])

  return (
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
  )
}
